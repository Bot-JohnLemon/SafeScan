# SafeScan

by David & Jordi & Lin

Group 6

The Web Page and its Desktop Version of the project of SafeScan Application

# Requirements

The next documentation explains the process needed to install the next Sockets to create your own NodeJs Server based on the Github.

Please first of all clone the this GitHub repository in your home directory:


```sh

cd ~/

git clone https://github.com/Bot-JohnLemon/SafeScan.git

```

<br>

>In case you dont have "git" installed please do it.



## Installing the sockets 

For the Installation of the sockets you will need to run the bash script called `INSTALL.sh`, but for this you need root permisions.

 ` sudo apt install mysql-server `

```sh

sudo su

[insert your root password]

. INSTALL.sh

```


During the installation while downloading PhpMyAdmin a window will apear, there select "apache2" as a web server, after that another window will pop up, there select to NOT install the default configuration.

After the Installer has finished you can run de server by writing `node app.js` or `nodemon app.js`

## Access the Web Server

To access the Web Server you will need to go to your default browser and type `[your_IP]:3000`.

Also if you want to modify the databases of MySQL you can access `[your_IP]/phpmyadmin` that is a web server that gives you the pssibility to administrate the databases visually. 
