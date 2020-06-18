const express = require('express')
const config = require('config')
const cars = require('./src/cars')

const app = express()
const port = config.port

app.use('/cars', cars)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))