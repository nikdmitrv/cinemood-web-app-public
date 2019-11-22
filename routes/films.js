const express = require('express');

const router = express.Router();
const Films = require('../models/films');
<<<<<<< HEAD

const userLogged = true;

// вывод всех фльмов 
// allFilms - метод в схеме Films
router.get('/', async (req, res) => {
    res.render('films/index', { allFilms: await Films.allFilms(), userLogged });
    // res.send(await Films.allFilms());
})
// вывод всех категорий 
// allCategories - метод в схеме Films
router.get('/category', async (req, res) => {
    res.render('./films/category/index', { allCategories: Films.allCategories() }, { userLogged })
=======
const userLogged = true;
// вывод всех фильмов 
// allFilms - метод в схеме Films
router.get('/', async (req, res) => {
    let userLogged = req.isLogged;
    res.render('./films/index', { allFilms: await Films.allFilms(), userLogged })
    //res.send(await Films.allFilms());
>>>>>>> 5c8a27ae22ba1ab9cad1e78e9e8abbb92c7756fa
})
// вывод всех фильмов выбранной категории
// getByCategory - метод в схеме Films
router.get('/:category', async (req, res) => {
<<<<<<< HEAD
    res.render('./films/category/detail', {
        categoryFilms: await Films.getByCategory(req.params.category)
    }, { userLogged })
=======
    let userLogged = req.isLogged;

    res.render('./films/category/detail', {
        categoryFilms: await Films.getByCategory(req.params.category), userLogged
    })
>>>>>>> 5c8a27ae22ba1ab9cad1e78e9e8abbb92c7756fa
})
// вывод определённого фильма
router.get('/:category/:film', async (req, res) => {
    let userLogged = req.isLogged;
    let film = await Films.getByName(req.params.film);
    res.render('./films/detail', { film }, { userLogged });
})

module.exports = router;
