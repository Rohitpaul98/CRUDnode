const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Cruddb'
const userRouter = require('./router/user')

const app = express();
app.use(express.json())
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => { console.log('open connection') })
app.use('/user', userRouter)

app.listen(8000, () => { console.log('listening on port 8000') })