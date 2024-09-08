console.log("Primeiro servidor")

const express = require('express')
const app = express()
app.use(express.json());
const router = require('../Routes/routes')

app.use(router)

app.listen(3000)