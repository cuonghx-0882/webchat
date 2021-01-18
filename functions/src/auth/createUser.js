const express = require('express')
const router = express.Router()
const { createUserWithEmailAndPassword } = require('./utils')

router.post('/', async (req,res) =>{
    const user = req.body
    console.log(user)
    if(await createUserWithEmailAndPassword(user)){
        return  res.status(200).send('Create user success')
    }
    return  res.status(100).send('Create user unsuccessful')
})

module.exports = router