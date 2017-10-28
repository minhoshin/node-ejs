"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    let renderInformation = {
        title: 'sign index',
        layout: 'layouts/layout-view'
    };

    res.render('sign', renderInformation);
    
});

module.exports = router;
