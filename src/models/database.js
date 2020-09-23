class Database {
  constructor(db) {
    this.db = db;
  }

  getAllRecipes() {
    return new Promise((resolve, reject) => {
      this.db.get('recipes', (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(JSON.parse(res));
      });
    });
  }

  setRecipes(recipes) {
    return new Promise((resolve, reject) => {
      this.db.set('recipes', JSON.stringify(recipes), (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  }
}

module.exports = {Database};
