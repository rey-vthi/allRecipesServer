const restoreRecipes = function(req, res, next) {
  req.app.locals.db
    .getAllRecipes()
    .then(recipes => {
      req.app.locals.recipes = recipes || [];
    })
    .then(next);
};

module.exports = {restoreRecipes};
