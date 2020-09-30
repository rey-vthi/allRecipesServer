const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const {processGithubOauth} = require('./handlers');
const {
  restoreRecipes,
  filterSalads,
  filterJuice,
  filterBreakfast,
  filterLunch,
  logout,
  getRecipe,
  isLoggedIn,
  addNewRecipe,
  getProfile,
  getOtherUsers
} = require('./userHandlers');

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(cookieParser());
app.use(fileUpload());
app.use(express.json());

app.use(express.static('./build'));

app.use('/api/assets', express.static('public/assets'));
app.get('/api/verify', processGithubOauth);
app.get('/api/getUser', (req, res) => {
  res.json(req.app.locals.userDetails);
});
app.get('/api/isLoggedIn', isLoggedIn);
app.use(restoreRecipes);
app.get('/api/getAllRecipes', (req, res) => {
  res.json(req.app.locals.recipes);
});
app.get('/api/getRecipe/:id', getRecipe);
app.get('/api/getAllSalads', filterSalads);
app.get('/api/getAllJuice', filterJuice);
app.get('/api/getAllBreakfast', filterBreakfast);
app.get('/api/getAllLunch', filterLunch);
app.post('/api/addNewRecipe', addNewRecipe);
app.get('/api/profile', getProfile);
app.get('/api/others', getOtherUsers);
app.post('/api/logout', logout);

module.exports = {app};
