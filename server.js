const mongoose = require('mongoose')
const express = require('express');

// connect database
require('./config/db')()

const app = express();

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

