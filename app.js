const express = require('express')
const dotenv = require('dotenv')

//load config

dotenv.config({ path: './config/config.env'})

const app = express()

app.listen()