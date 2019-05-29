var mysql = require('mysql');

var mysqlConnection = mysql.createPool({
    connectionLimit: 100,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'moshi_moshi',
    multipleStatements: true
});
function connection() {
    this.acquire = function (callback) {
        mysqlConnection.getConnection(function (err, connection) {
            if (err) {
                console.log("Issue with mysql" + err);
                callback(err);
                return;
            }
            callback(null, connection);
        })
    }
}

module.exports = new connection();