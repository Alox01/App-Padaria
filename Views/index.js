console.log("Primeiro servidor")

const express = require('express')
const app = express()
const router = require('../Routes/routes')

app.use(router)

app.listen(3000)