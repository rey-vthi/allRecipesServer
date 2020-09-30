const axios = require('axios');
const {getClientId, getClientSecret} = require('../config');

const generateUserInfoConfig = function(accessToken) {
  return {
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `token ${accessToken}`,
      accept: 'application/json'
    }
  };
};

const generateAccessTokenConfig = function(code) {
  return {
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${getClientId()}&client_secret=${getClientSecret()}&code=${code}`,
    headers: {
      accept: 'application/json'
    }
  };
};

const processGithubOauth = function(req, res) {
  const {sessions, db} = req.app.locals;
  const {code} = req.query;
  axios(generateAccessTokenConfig(code)).then(({data}) => {
    const accessToken = data['access_token'];
    axios(generateUserInfoConfig(accessToken)).then(({data}) => {
      const {name, avatar_url, id} = data;
      req.app.locals.userDetails = data;
      res.cookie('sId', sessions.createSession(data.id));
      db.addUser({name, url: avatar_url, id}).then(res.redirect('/'));
    });
  });
};

module.exports = {processGithubOauth};
