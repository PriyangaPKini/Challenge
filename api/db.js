const Pool = require("pg").Pool;

const pool = new Pool({
    user: "qfihmeqlospgnp",
    password:"cef065b6eb6acbf5286b4c039674b4ed5615d885b53883e16d6858f2a208c5a9",
    host:"postgres://qfihmeqlospgnp:cef065b6eb6acbf5286b4c039674b4ed5615d885b53883e16d6858f2a208c5a9@ec2-18-209-187-54.compute-1.amazonaws.com:5432/dfet3vkjgbp1i2",
    port:5432,
    database:"dfet3vkjgbp1i2"
});

module.exports = pool;