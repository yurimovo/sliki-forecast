const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api/auth', require('./routes/auth.routes'))
//app.use('/api/forecast', require('./routes/forecast.routes'))
//app.use('/api/admin', require('./routes/admin.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()