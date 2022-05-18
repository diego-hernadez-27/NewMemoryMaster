const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const inStup = require('./libs/initialSetup')
const cors = require('cors')

//Inicializaciones
const app = express();
inStup.createRoles();
/*onst corsOptions = {
  origin: "http://localhost:4000",
};
app.use(cors(corsOptions));*/
require('./config/passport');
app.use(flash());

//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//Middlewaress
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Variables Globales
/*app.use((req, res, next) =>{
  res.locals.User = req.User || null;
})*/

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/games.routes'));

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
