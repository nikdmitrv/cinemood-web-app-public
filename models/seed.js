const mongoose = require('mongoose');
const User = require('./users.js');
const Film = require('./films.js');

mongoose.connect('mongodb+srv://datauser:neJNDDYBoEGvopZ6@cluster0-qyjcg.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const film1 = new Film({
  name: 'Soviet Movie One',
  description: 'Description of Soviet Movie One Description of Soviet Movie One Description of Soviet Movie One Description of Soviet Movie One',
  category: 'soyuzmultfilm',
  price: 100,
})


const film2 = new Film({
  name: 'Soviet Movie Two',
  description: 'Description of Soviet Movie Two Description of Soviet Movie Two Description of Soviet Movie Two Description of Soviet Movie Two',
  category: 'soyuzmultfilm',
  price: 101,
})

const film3 = new Film({
  name: 'Russian Movie One',
  description: 'Description of Russian Movie One Description of Russian Movie One Description of Russian Movie One Description of Russian Movie One',
  category: 'skazki_rus',
  price: 200,
})

const film4 = new Film({
  name: 'English Movie One',
  description: 'Description of English Movie One Description of English Movie One Description of English Movie One Description of English Movie One',
  category: 'skazki_eng',
  price: 300,
})

const film5 = new Film({
  name: 'English Movie Two',
  description: 'Description of English Movie Two Description of English Movie Two Description of English Movie Two Description of English Movie Two',
  category: 'soyuzmultfilm',
  price: 301,
})

const user1 = new User({
  name: 'July',
  email: 'test@tes.t',
  password: '1234',
  kubikOwner: true,
  filmsOwned: ['Soviet Movie One', 'Russian Movie One', 'English Movie One'],
  key: 3212,
})

film1.save();
film2.save();
film3.save();
film4.save();
film5.save();
user1.save();
