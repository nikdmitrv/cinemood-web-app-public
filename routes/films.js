const express = require('express');
const router = express.Router();
const Films = require('../models/films');
const userLogged = true;
// вывод всех фильмов 
// allFilms - метод в схеме Films
router.get('/', async (req, res) => {
    res.render('./films/index', { allFilms: await Films.allFilms(), userLogged })
    //res.send(await Films.allFilms());
})
// вывод всех фильмов выбранной категории
// getByCategory - метод в схеме Films
router.get('/:category', async (req, res) => {
    res.render('./films/caterory/detail', {
        categoryFilms: await Films.getByCategory(req.params.category), userLogged
    })
})
// вывод определённого фильма
router.get('/:category/:film', async (req, res) => {
    let film = await Films.getByName(req.params.film);
    res.render('./films/detail', { film, userLogged });
})

module.exports = router;