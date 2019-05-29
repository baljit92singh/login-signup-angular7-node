var register = require('./register')

module.exports = {
    configure : (app) => {
        app.post('/register', (req, res) => {
            register.register(req , res)
        })
    }
}