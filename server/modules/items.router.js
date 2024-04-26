const express = require('express');
const router = express.Router();
const pool = require('./pool.js');
// these routes have been provided for you.
// you shouldn't have to change anything in this file.
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "items"';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "items" ("item", "quantity", "unit", "purchased") VALUES ($1, $2, $3, $4);'
    const item 
    pool.query(queryText, [req.body.item, req.body.quantity, req.body.unit])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
module.exports = router;
















