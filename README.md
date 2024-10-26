Begins here

from first of november

Technology Used: HTML5 CSS3 jQuery  GNU/Linux Digital Ocean as VPS GIMP

# Setup
Extract zip file to root folder. 
create phpmyadmin database (mariaDB)
edit connectDB id password in src/config
## 
```
edit .env file
set databasehost
e.g database user, name, password
```

&& 

```
port = 3000
```

visit http://localhost:3000 in your browser.

## If you have nodejs installed
```
npm install
```
&&

```
npm run server-node
```
visit http://localhost:3000 in your browser.
for login admin/user ,edit database table, tbladmin,tbluser with md5 encrypted password 
https://md5decrypted.net

