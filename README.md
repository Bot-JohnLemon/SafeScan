# SafeScan

by David & Jordi & Lin

Group 6

The Web Page and its Desktop Version of the project of SafeScan Application

# :arrow_down: Requirements :arrow_down:

The next documentation explains the process needed to install the next Sockets to create your own NodeJs Server based on the Github.

Please first of all clone the this GitHub repository in your home directory:


```sh

cd ~/

git clone https://github.com/Bot-JohnLemon/SafeScan.git

cd SafeScan

```

<br>

>In case you dont have "git" installed please do it.



## :arrow_down: Installing the sockets :arrow_down:

For the Installation of the sockets you will need to run the bash script called `INSTALL.sh`, but for this you need root permisions.

 ```sh

sudo su

[insert your root password]

. INSTALL.sh

```


During the installation while downloading PhpMyAdmin a window will apear, there select "apache2" as a web server, after that another window will pop up, there select to NOT install the default configuration.

After the Installer has finished you can run de server by writing `node app.js` or `nodemon app.js`

# :heavy_check_mark: Access the Web Server :heavy_check_mark:

To access the Web Server you will need to go to your default browser and type `[your_IP]:3000`.

Also if you want to modify the databases of MySQL you can access `[your_IP]/phpmyadmin` that is a web server that gives you the pssibility to administrate the databases visually. 

<br>

# :warning:Warning:warning:

>Please note that the configuration of this project contains a default password and usernames on the files `SafeScan/env/.env` and also in the `SafeScan/INSTALL.sh` (and also in the root directory of the machine after the installation) on those files there is information of the databse in plane text. Please modify both of this files and change it!!!
