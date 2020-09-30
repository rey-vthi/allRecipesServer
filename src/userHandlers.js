const restoreRecipes = function(req, res, next) {
  req.app.locals.db
    .getAllRecipes()
    .then(recipes => {
      req.app.locals.recipes = recipes || [];
    })
    .then(next);
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

const isLoggedIn = function (req, res) {
  
}

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

module.exports = {
  restoreRecipes,
  filterSalads,
  filterJuice,
  filterLunch,
  filterBreakfast,
  getNewRecipe
};
