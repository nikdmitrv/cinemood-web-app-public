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
    res.render('./users/index', { userData: await User.getById(req.params.id), userLogged });
})

// моя коллекция
router.get('/:id/films', async (req, res) => {
    let currentUser = await User.getById(req.params.id);
    res.render('./films/category/detail', {
        categoryFilms: currentUser.filmsOwned, userLogged
    })
})
module.exports = router;