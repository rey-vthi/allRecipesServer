const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const {Sessions} = require('./models/sessions');
const {processGithubOauth} = require('./handlers');
const allRecipes = [];

const app = express();

app.locals.sessions = new Sessions();

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

app.get('/api/getAllRecipes', (req, res) => {
  res.json(allRecipes);
});

app.get('/api/getAllSalads', (req, res) => {
  const recipes = allRecipes.filter(r => r.category === 'salad');
  res.json(recipes);
});

app.get('/api/getAllJuice', (req, res) => {
  const recipes = allRecipes.filter(r => r.category === 'juice');
  res.json(recipes);
});

app.get('/api/getAllBreakfast', (req, res) => {
  const recipes = allRecipes.filter(r => r.category === 'breakfast');
  console.log(recipes);
  res.json(recipes);
});

app.get('/api/getAllLunch', (req, res) => {
  const recipes = allRecipes.filter(r => r.category === 'lunch');
  res.json(recipes);
});

app.post('/api/addNewRecipe', (req, res) => {
  const {file} = req.files;
  fs.writeFileSync(`./public/assets/${file.md5}.jpg`, file.data, 'utf8');
  allRecipes.push(
    Object.assign(req.body, {by: 'revathi', path: `/assets/${file.md5}.jpg`})
  );
  res.end();
});

module.exports = {app};
