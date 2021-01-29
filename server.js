const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
const dotenv = require('dotenv');
dotenv.config();

=======
const dayjs = require('dayjs');
>>>>>>> f9476803f649c097315f01bdcd52c8a1e0fb7c27

const app = express();
const PORT = process.env.PORT || 3001;


const sequelize = require('./config/connection');
const { truncate } = require('fs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
dayjs().format();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});