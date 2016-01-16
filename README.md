# Proyect training using Node Express and Mongo

```git clone``` the repo and ```npm install``` to get started

### MongoDB in Mac OSX - El Capitan

### Install MongoDB with Homebrew or Download it from the page <a href="http://www.mongodb.org/downloads" target="_blank">here</a>

```bash
mkdir -p /data/db
```
### Set permissions for the data directory
Ensure that user account running mongod has correct permissions for the directory:

```bash
sudo chmod 0755 /data/db
sudo chown $USER /data/db
```

### Run MongoDB!
iTerm buffer 1: `mongod`  
iTerm buffer 2: `mongo`

### Code proyect
the proyect is build using MongoDb as the database, the Restful API is build using Restify a nodejs package,
built on top of express an as you know, express is built on top of NodeJS, but why Restify, beacuse the purpose of this package,
is only to expose the endpoints of a Restful service, and express is built more for web rendering using JavaScript in the backend.

### Run the Proyect
- start mongo
- `npm install` to install the dependencies
- `nodemon client.js` to run the code
