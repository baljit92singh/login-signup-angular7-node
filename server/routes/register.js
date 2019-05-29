var mysql = require('../db_connection')
var moment = require('moment');

function register() {
    this.register = (req, res) => {
        let data = req.body;
        var users = {
            "id": null,
            "name": data.name,
            "email": data.email,
            "password": data.password,
            "date_of_birth": moment(data.date_of_birth).format('YYYY/MM/DD')
        }
        mysql.acquire((err, con) => {
            if (err) {
                console.log(err);
            } else {
                con.query('INSERT INTO users SET ?', users, function(error, results, fields) {
                    if (error) {
                        console.log("error ocurred", error);
                        res.send({
                            "code": 400,
                            "message": "error ocurred"
                        })
                    } else {
                        console.log('The solution is: ', results);
                        res.send({
                            "code": 200,
                            "message": "user registered sucessfully"
                        });
                    }
                });
            }
        });
    }
}

module.exports = new register();