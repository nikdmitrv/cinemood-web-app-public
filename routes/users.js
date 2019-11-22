const express = require('express');

const router = express.Router();
const User = require('../models/users');
//const userLogged = true;


// initial routers
router.get('/new', (req, res) => {
    let userLogged = req.isLogged;
    res.render('./users/new');
})
router.get('/login', (req, res) => {
    let userLogged = req.isLogged;
    res.render('./users/login');
})

// при нажатии на личный кабинет 
// редирект на регистрацию 
router.get('/', (req, res) => {
    res.redirect('/films');
})

// личный кабинет
// getUser - метод в схеме Users
router.get('/:id', async (req, res) => {
    let userLogged = req.isLogged;
    res.render('./users/index', { userData: await User.getById(req.params.id), userLogged });
})

// моя коллекция
router.get('/:id/films', async (req, res) => {
    let currentUser = await User.getById(req.params.id);
    let userLogged = req.isLogged;
    res.render('./films/category/detail', {
        categoryFilms: currentUser.filmsOwned, userLogged
    })
})

// обработчик авторизации пользователя и присвоения куки
router.post('/login', async (req, res) => {
    let currentUser = await User.getByName(req.body.username)
    if (currentUser.password === req.body.password) {
        res.cookie('logged', currentUser.key);
        res.redirect('/');
    } else {
        res.redirect('/error');
    }
})

// регистрация пользователя
router.post('/new', (req, res) => {
    let newUser = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        kubikOwner: false,
        key: Math.floor(Math.random() * 100000)
    });
    newUser.save();
    res.redirect('/login');
})

// логаут, удаление куки
router.get('/logout', (req, res) => {
    res.clearCookie('logged');
    res.redirect('/');
})
module.exports = router;
