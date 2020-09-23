const axios = require('axios');

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
    url: `https://github.com/login/oauth/access_token?client_id=1d0dd614acec505180d7&client_secret=bc54228f715cc9b4691f8f518c77e8d071657ffb&code=${code}`,
    headers: {
      accept: 'application/json'
    }
  };
};

const processGithubOauth = function(req, res) {
  const {sessions} = req.app.locals;
  const {code} = req.query;
  axios(generateAccessTokenConfig(code)).then(({data}) => {
    const accessToken = data['access_token'];
    axios(generateUserInfoConfig(accessToken)).then(({data}) => {
      req.app.locals.userDetails = data;
      res.cookie('sId', sessions.createSession(data.id));
      res.redirect('http://localhost:3000/');
    });
  });
};

module.exports = {processGithubOauth};
