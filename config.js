const {env} = process;

const getClientId = () => {
  return env.CLIENT_ID;
};

const getClientSecret = () => {
  return env.CLIENT_SECRET;
};

const getReactHost = () => {
  return env.REACT_HOST;
};

module.exports = {
  getClientId,
  getClientSecret,
  getReactHost
};
