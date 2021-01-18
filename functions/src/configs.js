const functions = require("firebase-functions");
const admin =require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
const realtimeDB = admin.database();

const USER_ROLE = {
    NORMAL_USER: null,
    ADMIN_READONLY: 0,
    ADMIN_READWRITE: 1,
}

exports.functions = functions.region("web_chat-1");
exports.admin = admin;
exports.firestore = firestore;
exports.realtimeDB = realtimeDB;
exports.USER_ROLE = USER_ROLE;


