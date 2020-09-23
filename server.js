const {app} = require('./src/app');
const {Database} = require('./src/models/database');
const {Sessions} = require('./src/models/sessions');
const {getRedisClient} = require('./src/redisClient');

const redisClient = getRedisClient();
const db = new Database(redisClient);
app.locals.db = db;
app.locals.sessions = new Sessions();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on ${port}`));
