const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const auth = require('./routes/auth')
const passport = require('passport')

const PORT = config.get('port') || 5000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', auth)
app.use(passport.initialize())
require('./middleware/authJwtMiddleware')(passport)
//app.use('/api/forecast', require('./routes/forecast.routes'))
//app.use('/api/admin', require('./routes/admin.routes'))

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