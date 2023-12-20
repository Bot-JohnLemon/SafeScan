import os
import mysql.connector
import requests
import time
import urllib.parse
import json

#  /home/safescan/safescan-project/uploads

API_KEY="041d19bcac27e35f69b115a322a969098f73f9a4330a31862a31e4867f3fdba2"

def ubicaciones_archivos():
    #   directorio_especifico = (input("Introducela ruta especifica:\n>>  "))
    directorio_especifico = "/home/safescan/safescan-project/uploads"
    ubicaciones_archivos = []
    for raiz, directorios, nombres_archivos in os.walk(directorio_especifico):
        for nombre_archivo in nombres_archivos:
            ruta_completa = os.path.join(raiz, nombre_archivo)
            ubicaciones_archivos.append(ruta_completa)
    return ubicaciones_archivos

def api():
    #   res=(input("¿Tiene usted una version premium de VirusTotal?\n>>>  "))
    #   if (res == "si"):
    #       print("Ok esto es un codigo preliminar que no cuenta con la adaptacion de VirusTotal Premium. Exit")
    #       exit
    ubicaciones_registradas = ubicaciones_archivos()
    total_archivos_dia = 0
    cantidad_archivos = len(ubicaciones_registradas)
    print("\nHAY UN TOTAL DE ", cantidad_archivos, " ARCHIVOS:\n")
    for ubicacion_registrada in ubicaciones_registradas:
        print(ubicacion_registrada)
    if (total_archivos_dia >= 500):
        print("No se pueden enviar mas archivos, se ha superado el limite diario")
        exit
    if cantidad_archivos > 4:
        print("Para no superar el limite de envio de archivos por minuto,\nse enviara 1 archivo cada 15 secs...")
        ids = envio_de_archivos(ubicaciones_registradas, 15)
    else:
        ids = envio_de_archivos(ubicaciones_registradas, 0)
    print("\n===========>>>   ANALISIS   <<<===========\n")
    hashes = obtener_analisis(ids)
    print("\n===========>>>   REPORTES   <<<===========\n")
    obtener_reporte(hashes)

def envio_de_archivos(ubicaciones_registradas, delay):
    ids = []
    for ubicacion in ubicaciones_registradas:
        ubicacion_tamaño = os.path.getsize(ubicacion)
        if ubicacion_tamaño <= 33554432: 
            url = "https://www.virustotal.com/api/v3/files"
            files = { "file": (ubicacion, open(ubicacion, "rb")) }
            headers = {
                "accept": "application/json",
                "x-apikey": API_KEY
            }
        elif ubicacion_tamaño > 33554432 and ubicacion_tamaño < 681574400:  
            url = "https://www.virustotal.com/api/v3/files/upload_url"
            files = { "file": (ubicacion, open(ubicacion, "rb")) }
            headers = {
                "accept": "application/json",
                "x-apikey": API_KEY
            }
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                data = response.json()
                url = data["data"]
            else:
                    print("Error, ha fallado algo al obtener la url para enviar el archivo a VirusTotal")
                    exit
        else:
            print("El tamaño de un archivo a enviar es superior a 650MB, por lo tanto no se puede enviar...Exit")
            exit
        print("\nTiempo de espera: ", delay, "segundos...")
        time.sleep(delay)
        response = requests.post(url, files=files, headers=headers)
        if response.status_code == 200:
            data = response.json()
            id = data["data"]["id"]
            ids.append(id)
        else:
                print("Error, ha fallado el envio del archivo a VirusTotal")
        print("--->  Enviando el archivo:\n--->  ", ubicacion, "\nID: ", id)
    return ids

def obtener_analisis(ids):
    hashes = []
    for id in ids:
        id = urllib.parse.quote(id)
        url = f"https://www.virustotal.com/api/v3/analyses/{id}"
        headers = {
            "accept": "application/json",
            "x-apikey": API_KEY
        }
        url = requests.get(url, headers=headers)
        data = url.json()
        sha256 = data["meta"]["file_info"]["sha256"]
        print(sha256, "  ------->  analisis completo")
        hashes.append(sha256)

    return hashes

def obtener_reporte(hashes):
    registros_totales = []
    for hash in hashes:
        i = 0
        hash = urllib.parse.quote(hash)
        url = f"https://www.virustotal.com/api/v3/files/{hash}"
        
        headers = {
            "accept": "application/json",
            "x-apikey": API_KEY
        }
        print("\nHASH: ", hash)
        print("URL: ", url)
        response = requests.get(url, headers=headers)
        data = response.json()
        type_description = data["data"]["attributes"]["type_description"]
        last_modification_date = data["data"]["attributes"]["last_modification_date"]
        size = data["data"]["attributes"]["size"]
        harmless = data["data"]["attributes"]["last_analysis_stats"]["harmless"]
        suspicious = data["data"]["attributes"]["last_analysis_stats"]["suspicious"]
        malicious = data["data"]["attributes"]["last_analysis_stats"]["malicious"]
        undetected = data["data"]["attributes"]["last_analysis_stats"]["undetected"]
        print("TIPO: ", type_description)
        print("ULTIMA MODIFICACION: ", last_modification_date)
        print("TAMAÑO: ", size, "KB")
        print("INOFENSIVO: ", harmless, " %")
        print("SOSPECHOSO: ", suspicious, " %")
        print("MALICIOSO: ", malicious, " %")
        print("INDETECTABLE: ", undetected, " %")
        print("\n\n\n")
        registros_totales = [type_description,last_modification_date,size,hash,harmless,suspicious,malicious,undetected]

        file_path = f'/home/safescan/safescan-project/analysis/{hash}_{i+1}_analysis.json'
        with open(file_path, 'w') as json_file:
            json.dump(registros_totales, json_file, indent=4)

    return registros_totales

api()