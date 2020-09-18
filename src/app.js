const express = require('express');
const cookieParser = require('cookie-parser');

const allRecipes = [
  {
    name: 'pongal',
    ingredients: ['2cup rice', '2cup jaggery', 'water'],
    steps: [
      'Boil water',
      'put rice into boiled water',
      'smash the jaggery and add it to boiled rice'
    ],
    type: 'sweet'
  }
];

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get('/api/getAllRecipes', (req, res) => {
  res.json({allRecipes});
});

module.exports = {app};
