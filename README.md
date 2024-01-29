# SafeScan

by David & Jordi & Lin

Group 6

The Web Page and its Desktop Version of the project of SafeScan Application

## Tech Stack:

<a href="https://www.linux.org/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://git-scm.com/" rel="nofollow"> <img src="https://camo.githubusercontent.com/fcafa5ebc1f5f789ae7d012a3ecd8fe7bda49516591caf7c37698f764165d880/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="git" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" style="max-width: 100%;"> </a>
<a href="https://www.w3.org/html/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://www.w3schools.com/css/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://nodejs.org" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://reactjs.org/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://www.python.org" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://firebase.google.com/" rel="nofollow"> <img src="https://camo.githubusercontent.com/3e5344a2965e786497ceb575ad67d2c64d412bb9683da05791edf424a0e40734/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667" alt="firebase" width="40" height="40" data-canonical-src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" style="max-width: 100%;"> </a>
<a href="https://www.mysql.com/" rel="nofollow"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" style="max-width: 100%;"> </a>
<a href="https://www.figma.com/" rel="nofollow"> <img src="https://github.com/Bot-JohnLemon/SafeScan/assets/28149894/3f544fb4-c028-461f-b2ce-5aa981131500" alt="figma" width="40" height="40"> </a>

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
