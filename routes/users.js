const express = require('express');

const router = express.Router();
const User = require('../models/users');

// initial routers
router.get('/new', (req, res) => {
    res.render('./users/new');
})
router.get('/login', (req, res) => {
    res.render('./users/login');
})

// личный кабинет
// getUser - метод в схеме Users
router.get('/:id', async (req, res) => {
    res.render('./users/index', { userData: await User.getByName(req.params.id) }, { userLogged });
})

module.exports = router;
