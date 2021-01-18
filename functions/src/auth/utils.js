const { admin } = require("../configs")

const createUserWithEmailAndPassword = (user) => {
    console.log('createUserWithEmailAndPassword')
    admin.auth().createUser({
        email: user.email,
        password: user.password
    })
        .then(function(userRecord) {
            // A UserRecord representation of the newly created user is returned
            console.log("Successfully created new user:", userRecord.uid)
            return true
        })
        .catch(function(error) {
            console.log("Error creating new user:", error)
            return false
        })
}


exports.createUserWithEmailAndPassword = createUserWithEmailAndPassword