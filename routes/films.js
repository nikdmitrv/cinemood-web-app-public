const express = require('express');
const router = express.Router();
const Films = require('../models/films');

// вывод всех фльмов 
// allFilms - метод в схеме Films
router.get('/', async (req, res) => {
    res.render('./films/index', Films.allFilms())
})
// вывод всех категорий 
// allCategories - метод в схеме Films
router.get('/category', async (req, res) => {
    res.render('./films/category/index', Films.allCategories())
})
// вывод всех фильмов выбранной категории
// getByCategory - метод в схеме Films
router.get('/:category', async (req, res) => {
    res.render('./films/caterory/detail', {
        categoryFilms: await Films.getByCategory(req.params.category)
    })
})
// вывод определённого фильма
router.get('/:category/:film', async (req, res) => {
    let category = await Films.getByCategory(req.params.category);
    let choosenFilm = req.params.film;
    res.render('./films/detail', { film: category.choosenFilm });
})

module.exports = router;