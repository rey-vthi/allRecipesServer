const restoreRecipes = function(req, res, next) {
  req.app.locals.db
    .getAllRecipes()
    .then(recipes => {
      req.app.locals.recipes = recipes || [];
    })
    .then(next);
};

const getNewRecipe = (details, id, by, file) => {
  const today = new Date();
  const recipeId = today.getHours() + today.getSeconds();
  const {name, category, description, steps, ingredients} = details;
  const allSteps = steps.split(',');
  const allIngredients = ingredients.split(',');
  return {
    name,
    category,
    steps: allSteps,
    ingredients: allIngredients,
    description,
    recipeId,
    id,
    by,
    path: `/assets/${file}.jpg`
  };
};

const filterSalads = function(req, res) {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'salad');
  res.json(filteredRecipes);
};

const filterJuice = function(req, res) {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'juice');
  res.json(filteredRecipes);
};

const filterBreakfast = function(req, res) {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'breakfast');
  res.json(filteredRecipes);
};

const filterLunch = function(req, res) {
  const {recipes} = req.app.locals;
  const filteredRecipes = recipes.filter(r => r.category === 'lunch');
  res.json(filteredRecipes);
};

const getRecipe = function(req, res) {
  const {id} = req.params;
  const {recipes} = req.app.locals;
  const recipe = recipes.filter(r => r.recipeId === +id);
  res.json(recipe);
};

const isLoggedIn = function(req, res) {
  const {sessions} = req.app.locals;
  const {sId} = req.cookies;
  const userId = sessions.getUserId(sId);
  if (userId) res.json({status: true});
  else res.json({status: false});
};

const addNewRecipe = function(req, res) {
  const {file} = req.files;
  const {recipes, db, userDetails} = req.app.locals;
  const {name, id} = userDetails;
  fs.writeFileSync(`./public/assets/${file.md5}.jpg`, file.data, 'utf8');
  const recipe = getNewRecipe(req.body, id, name, file.md5);
  recipes.push(recipe);
  db.setRecipes(recipes);
  res.end();
};

const getProfile = function(req, res) {
  const {db, userDetails} = req.app.locals;
  db.getUser(userDetails.id).then(info => {
    res.json(JSON.parse(info));
  });
};

const logout = function(req, res) {
  const {sessions} = req.app.locals;
  const {sId} = req.cookies;
  sessions[sId] = '';
  res.cookie('sId', '');
  res.redirect('/');
};

const getOtherUsers = function(req, res) {
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
};

module.exports = {
  restoreRecipes,
  filterSalads,
  filterJuice,
  filterLunch,
  filterBreakfast,
  logout,
  getRecipe,
  isLoggedIn,
  addNewRecipe,
  getProfile,
  getOtherUsers
};
