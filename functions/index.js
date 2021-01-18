const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onCreateUser = functions.auth.user().onCreate(user =>{
  console.log(user)
})

const {createUser} = require('./src/auth')
exports.createUser = createUser