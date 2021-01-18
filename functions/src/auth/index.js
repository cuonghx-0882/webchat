const express = require('express')
const cors = require('cors')({ origin: true })
const app = express()

app.use(cors)
const {functions} = require('../configs')

const checkEmail = (email) => {

    return false
}

const  checkUser = async  (req,res,next) =>{
    try{
        let user = req.body
        if(user.email === null || checkEmail(user.email)){
            return res.status(100).send('Email already exists')
        }
        console.log('checkUser')
        return  next()
    }
    catch (error){
        return res.status(403).send('ERROR')
    }

}
const createUser = require('./createUser')

app.use('/', checkUser, createUser)
app.use('/test', createUser)

exports.createUser = functions.https.onRequest(app)







