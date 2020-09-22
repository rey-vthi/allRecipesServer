const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const allRecipes = [
  {
    by: 'breakfast',
    name: 'lunch',
    ingredients: ['2cup rice', '2cup jaggery', 'water'],
    steps: [
      'Boil water',
      'put rice into boiled water',
      'smash the jaggery and add it to boiled rice'
    ],
    description: 'tasty sweaty pongal is made ..',
    type: 'breakfast'
  },
  {
    by: 'revathi',
    name: 'salad',
    ingredients: ['2cup rice', '2cup jaggery', 'water'],
    steps: [
      'Boil water',
      'put rice into boiled water',
      'smash the jaggery and add it to boiled rice'
    ],
    description: 'tasty sweaty pongal is made ..',
    type: 'salad'
  },
  {
    by: 'revathi',
    name: 'lunch',
    ingredients: ['2cup rice', '2cup jaggery', 'water'],
    steps: [
      'Boil water',
      'put rice into boiled water',
      'smash the jaggery and add it to boiled rice'
    ],
    description: 'tasty sweaty pongal is made ..',
    type: 'lunch'
  },
  {
    by: 'revathi',
    name: 'juice',
    ingredients: ['2cup rice', '2cup jaggery', 'water'],
    steps: [
      'Boil water',
      'put rice into boiled water',
      'smash the jaggery and add it to boiled rice'
    ],
    description: 'tasty sweaty pongal is made ..',
    type: 'juice'
  }
];

const app = express();

app.use(cookieParser());
app.use(fileUpload());
app.use(express.json());

app.get('/api/getAllRecipes', (req, res) => {
  res.json(allRecipes);
});

app.get('/api/getAllSalads', (req, res) => {
  const recipes = allRecipes.filter(r => r.type === 'salad');
  res.json(recipes);
});

app.get('/api/getAllJuice', (req, res) => {
  const recipes = allRecipes.filter(r => r.type === 'juice');
  res.json(recipes);
});

app.get('/api/getAllBreakfast', (req, res) => {
  const recipes = allRecipes.filter(r => r.type === 'breakfast');
  console.log(recipes);
  res.json(recipes);
});

app.get('/api/getAllLunch', (req, res) => {
  const recipes = allRecipes.filter(r => r.type === 'lunch');
  res.json(recipes);
});

app.post('/api/addNewRecipe', (req, res) => {
  const {dishName, ingredients, steps, description} = req.body;
  const {file} = req.files;
  fs.writeFileSync(`./public/assets/${file.md5}.jpg`, file.data, 'utf8');
});

module.exports = {app};
