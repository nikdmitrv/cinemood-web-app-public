const express = require('express');
const path = require('path');

const handelbars = require('express-handlebars');

const hbs = handelbars.create({
    defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views'),
})

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs.engine);
app.use('/dias', express.static('diafilms'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.get('/dias', (req, res) => {
    res.render('index.hbs', { imgsrc: '/diafilms/1.jpg' })
})

app.listen(3000);