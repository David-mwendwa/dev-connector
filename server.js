const mongoose = require('mongoose')
const express = require('express');

// Connect database
require('./config/db')()

const app = express();

// Init middleware
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => res.send('API Running'))

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

