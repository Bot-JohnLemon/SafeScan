# SafeScan

by David & Jordi & Lin

Group 6

The Web Page and its Desktop Version of the project of SafeScan Application

# Requirements

The next documentation explains the process needed to install the next Sockets to create your own NodeJs Server based on the Github.

Please first of all install the next requirements of NodeJs:

` sudo apt install npm `

## Database 

The Relational Database we are using is MySQL managed with PhpMyAdmin, the next instructions will help to install and configure the database.

 ` sudo apt install mysql-server `

Now we have to configure the database:

```sh

sudo mysql

...

```

 ` sudo apt install phpmyadmin ` 

During the installation the download a window will apear, there select "apache2" as a web server, after that another window will pop up, there select to not install the default configuration.

## Creating tables for users

Go from a website to the url: http://your_server_IP/phpmyadmin.

There create a database and call it "safescan_login_node_server", a table called "users":

Inside the table introduce the next "registros":

    - id (autoincremental)
    - email
    - username
    - password
    - rol

