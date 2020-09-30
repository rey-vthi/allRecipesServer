const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const {processGithubOauth, githubLogin} = require('./handlers');
const {
  restoreRecipes,
  filterSalads,
  filterJuice,
  filterBreakfast,
  filterLunch,
  getNewRecipe
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

app.get('/api/signIn', githubLogin);

app.get('/api/verify', processGithubOauth);

app.get('/api/getUser', (req, res) => {
  res.json(req.app.locals.userDetails);
});

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

app.get('/api/getRecipe/:id', (req, res) => {
  const {id} = req.params;
  const {recipes} = req.app.locals;
  const recipe = recipes.filter(r => r.recipeId === +id);
  res.json(recipe);
});

app.get('/api/getAllSalads', filterSalads);

app.get('/api/getAllJuice', filterJuice);

app.get('/api/getAllBreakfast', filterBreakfast);

app.get('/api/getAllLunch', filterLunch);

app.post('/api/addNewRecipe', (req, res) => {
  const {file} = req.files;
  const {recipes, db, userDetails} = req.app.locals;
  const {name, id} = userDetails;
  fs.writeFileSync(`./public/assets/${file.md5}.jpg`, file.data, 'utf8');
  const recipe = getNewRecipe(req.body, id, name, file.md5);
  recipes.push(recipe);
  db.setRecipes(recipes);
  res.end();
});

app.get('/api/profile', (req, res) => {
  const {db, userDetails} = req.app.locals;
  db.getUser(userDetails.id).then(info => {
    res.json(JSON.parse(info));
  });
});

app.get('/api/others', (req, res) => {
  const {db, userDetails} = req.app.locals;
  db.getAllUsers().then(users => {
    const allUsers = Object.keys(users);
    const others = allUsers.filter(id => userDetails.id !== +id);
    const result = others.map(user => {
      const {followers, name, url, id} = JSON.parse(users[user]);
      if (followers.includes(userDetails.id)) {
        return {name, url, id, followingStatus: true};
      }
      return {name, url, id, followingStatus: false};
    });
    res.json(result);
  });
});

app.post('/api/toggleFollowStatus', (req, res) => {
  res.end();
});

module.exports = {app};
