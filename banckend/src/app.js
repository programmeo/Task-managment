const express = require("express")
const cors = require('cors');
const routes = require('./routes') //index.js

const app = express()

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow cross-origin requests

app.use('/api', routes)


module.exports= app