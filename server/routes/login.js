var mysql = require('../db_connection')

function login() {
    this.login = (req, res) => {
        let data = req.body
        var email = data.email;
        var password = data.password;
        mysql.acquire((err, con) => {
            if (err) {
                console.log(err)
            } else {
                con.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
                    if (error) {
                        // console.log("error ocurred",error);
                        res.send({
                            "code": 400,
                            "message": "error ocurred"
                        })
                    } else {
                        // console.log('The solution is: ', results);
                        if (results.length > 0) {
                            if (results[0].password == password) {
                                res.send({
                                    "code": 200,
                                    "message": "login sucessfull",
                                    "result": results[0]
                                });
                            } else {
                                res.send({
                                    "code": 204,
                                    "message": "Email and password does not match"
                                });
                            }
                        } else {
                            res.send({
                                "code": 204,
                                "message": "Email does not exits"
                            });
                        }
                    }

                })
            }
        })

    }
}

module.exports = new login();