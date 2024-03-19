#!/bin/bash

if [ "$EUID" -ne 0 ]; then
    echo "Por favor, ejecuta el script con permisos de superusuario (root)."
    exit 1
fi

print_message() {
    echo -e "\n\e[1;34m$1\e[0m\n"
}
print_info() {
    echo -e "\e[32m$1\e[0m"
}

install_package() {
    apt install -y "$1"
    if [ $? -eq 0 ]; then
        echo -e "\n\n\e[32m$1 instalado correctamente\e[0m"
    else
        echo -e "\n\n\e[31mError al instalar $1\e[0m"
        exit 1
    fi
}

print_message "Actualizando la lista de paquetes..."
apt update

print_message "Instalando Node.js y npm..."
install_package "nodejs"
install_package "npm"

print_message "Instalando MySQL Server..."
install_package "mysql-server"
print_message "Configurando base de datos y usuario..."
mysql_config_file="/root/.safescan-users.cnf"
echo "[client]" > "$mysql_config_file"
echo "user=root" >> "$mysql_config_file"
echo "password=safescan" >> "$mysql_config_file"

mysql --defaults-file="$mysql_config_file" -e "
    CREATE DATABASE IF NOT EXISTS login_safescan_node_server;
    CREATE USER 'safescan'@'localhost' IDENTIFIED BY 'safescan';
    GRANT ALL PRIVILEGES ON login_safescan_node_server.* TO 'safescan'@'localhost';
    FLUSH PRIVILEGES;
"

print_message "Creando tablas en la base de datos..."
mysql --defaults-file="$mysql_config_file" login_safescan_node_server -e "
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  rol VARCHAR(20) NOT NULL
);
"
print_message "Instalando PHP..."
install_package "php"

print_message "Instalando Apache2..."
install_package "apache2"

print_message "Instalando phpMyAdmin..."
install_package "phpmyadmin"

systemctl restart apache2
systemctl restart mysql
systemctl restart npm
systemctl restart phpmyadmin

print_message "##################################################"
print_message "Instalación y configuración completadas con éxito!"
print_message "##################################################"
