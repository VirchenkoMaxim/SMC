const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'articles',
    password: 'maks',
})
app.get('/user', (req, res) => {
    const userId = req.params.id;
    const pageNum = parseInt(req.query.page - 1, 10) || 0;
    const count = parseInt(req.query.count, 10) || 1;
    const ignore = count * pageNum;
    const limit = ignore + ',' + count
    const queryString = `SELECT * FROM users ORDER BY ID DESC LIMIT ${limit}`


    connection.query(queryString, [userId], (err, rows, fields) => {
        connection.query('SELECT COUNT(id) AS total FROM users;', (err, total, fields) => {
            res.json({ status: 'done', data: rows, total: total[0].total })
        })
        // res.end()
    })

})
app.get('/user', (req, res) => {
    const userId = req.params.id;
    const pageNum = parseInt(req.query.page - 1, 10) || 0;
    const count = parseInt(req.query.count, 10) || 1;
    const ignore = count * pageNum;
    const limit = ignore + ',' + count
    const queryString = `SELECT * FROM users ORDER BY ID DESC LIMIT ${limit}`


    connection.query(queryString, [userId], (err, rows, fields) => {
        connection.query('SELECT COUNT(id) AS total FROM users;', (err, total, fields) => {
            res.json({ status: 'done', data: rows, total: total[0].total })
        })
        // res.end()
    })

})
app.get("/", function (request, response) {
    response.send("<h2>Привет Express!</h2>");
});
app.listen(4000)