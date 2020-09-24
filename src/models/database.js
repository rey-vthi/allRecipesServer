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

  addUser(details) {
    const info = Object.assign(details, {followers: '[]', following: '[]'});
    return new Promise((resolve, reject) => {
      this.db.hset('users', details.id, JSON.stringify(info), err => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.db.hgetall('users', (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  getUser(id) {
    return new Promise((resolve, reject) => {
      this.db.hget('users', id, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  }
}

module.exports = {Database};
