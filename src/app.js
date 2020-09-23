const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const {processGithubOauth} = require('./handlers');
const {restoreRecipes} = require('./userHandlers');

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(cookieParser());
app.use(fileUpload());
app.use(express.json());

app.use('/api/assets', express.static('public/assets'));

app.get('/api/verify', processGithubOauth);

app.get('/api/isLoggedIn', (req, res) => {
  const {sessions} = req.app.locals;
  const {sId} = req.cookies;
  const userId = sessions.getUserId(sId);
  if (userId) res.json({status: true});
  else res.json({status: false});
});

app.use(restoreRecipes);

app.get('/api/getAllRecipes', (req, res) => {
  res.json(req.app.locals.recipes);
});

app.get('/api/getAllSalads', (req, res) => {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'salad');
  res.json(filteredRecipes);
});

app.get('/api/getAllJuice', (req, res) => {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'juice');
  res.json(filteredRecipes);
});

app.get('/api/getAllBreakfast', (req, res) => {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'breakfast');
  res.json(filteredRecipes);
});

app.get('/api/getAllLunch', (req, res) => {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'lunch');
  res.json(filteredRecipes);
});

app.post('/api/addNewRecipe', (req, res) => {
  const {file} = req.files;
  const {recipes, db, userDetails} = req.app.locals;
  const by = userDetails.name;
  fs.writeFileSync(`./public/assets/${file.md5}.jpg`, file.data, 'utf8');
  const recipe = {...req.body, by, path: `/assets/${file.md5}.jpg`};
  recipes.push(recipe);
  db.setRecipes(recipes);
  res.end();
});

module.exports = {app};
