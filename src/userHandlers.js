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

module.exports = {
  restoreRecipes,
  filterSalads,
  filterJuice,
  filterLunch,
  filterBreakfast
};
