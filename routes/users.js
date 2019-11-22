const express = require('express');

const router = express.Router();
const User = require('../models/users');
<<<<<<< HEAD
//const userLogged = true;


const userLogged = true;

const userLogged = true;
=======
// const userLogged = true;
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7

const userLogged = true;
// initial routers
router.get('/new', (req, res) => {
<<<<<<< HEAD
    let userLogged = req.isLogged;
=======
    const userLogged = req.isLogged;
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
    res.render('./users/new');
});
router.get('/login', (req, res) => {
<<<<<<< HEAD
    let userLogged = req.isLogged;
=======
    const userLogged = req.isLogged;
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
    res.render('./users/login');
});

// при нажатии на личный кабинет
// редирект на регистрацию
router.get('/', (req, res) => {
    res.redirect('/films');
});

// при нажатии на личный кабинет 
// редирект на регистрацию 
router.get('/', (req, res) => {
    res.redirect('/films');
})

// личный кабинет
// getUser - метод в схеме Users
router.get('/:id', async (req, res) => {
<<<<<<< HEAD
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
=======
    const userLogged = req.isLogged;
    res.render('./users/index', {
        userData: await User.getById(req.params.id),
        userLogged,
    });
});

// моя коллекция
router.get('/:id/films', async (req, res) => {
    const currentUser = await User.getById(req.params.id);
    const userLogged = req.isLogged;
    res.render('./films/category/detail', {
        categoryFilms: currentUser.filmsOwned,
        userLogged,
    });
});

// обработчик авторизации пользователя и присвоения куки
router.post('/login', async (req, res) => {
    const currentUser = await User.getByName(req.body.username);
    if (currentUser.password === req.body.password) {
        res.cookie('userLogged', currentUser.key);
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
        res.redirect('/');
    } else {
        res.redirect('/error');
    }
<<<<<<< HEAD
})

// регистрация пользователя
router.post('/new', (req, res) => {
    let newUser = new User({
=======
});

// регистрация пользователя
router.post('/new', (req, res) => {
    const newUser = new User({
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        kubikOwner: false,
<<<<<<< HEAD
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
=======
        key: Math.floor(Math.random() * 100000),
    });
    newUser.save();
    res.redirect('/login');
});

// логаут, удаление куки
router.get('/logout', (req, res) => {
    res.clearCookie('userLogged');
    res.redirect('/');
});
>>>>>>> b5419b1e7e2bbac1371e6a3763f737f3b88f6ca7
module.exports = router;
