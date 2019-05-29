var login = require('./login')

module.exports = {
    configure : (app) => {
        app.post('/login', (req, res) => {
            login.login(req , res)
        })
    }
}