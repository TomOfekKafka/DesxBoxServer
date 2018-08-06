var express = require('express');
var neo4j = require('neo4j');
var fs = require('fs');
var time = require('time');
const app = express();
const port = 8080;
var async = require('async');
var admin = require("firebase-admin");
var firebase = require('firebase');
app.use(require('cors')())


var serviceAccount = require('./serviceAccount.json');

firebase.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://deskbox-810eb.firebaseio.com'
});


require('./TestConnectivity')(app, admin, firebase);
require('./AddBox')(app, admin, firebase);
require('./GetAllBoxes')(app, admin, firebase);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});