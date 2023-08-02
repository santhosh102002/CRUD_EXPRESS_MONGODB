require('dotenv').config()
const express = require('express');
const connectToDB = require('./Config/db.Config.js')
const app = express();



connectToDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRouter = require('./routers/userRouters.js')

app.use('/',userRouter)


module.exports = app