"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    let renderInformation = {
        title: 'index',
        value: [1, 2, 3, 4, 5],
        layout: 'layouts/layout-default'
    };

    res.render('', renderInformation);
    
});

module.exports = router;
