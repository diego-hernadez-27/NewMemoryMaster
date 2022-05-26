const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//const jwt = require('jsonwebtoken');
//const { SECRET, EXPIRE_TIME, COOKIE_EXPIRES } = process.env;

const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passewordField: 'password'
}, async (username, password, done) => {

  //Confirmar si coinciden los nombres de usuario
  const user = await User.findOne({username})
  if (!user) {
    return done(null, false, { message: 'Not User Found'});
  } else{
    //Coincidencia de contraseña
    const match = await user.matchPassword(password);
    if(match) {
      /*const id = user.id;
      const token = jwt.sign({id:id}, `${SECRET}`, {
        expiresIn: `${EXPIRE_TIME}`
      })
      console.log("Token: " + token + " para el usuario: " + user.username);

      const cookieOptions = {
        expires: new Date(Date.now()+`${COOKIE_EXPIRES}` * 24 * 60 * 60 * 1000),
        httpOnly: true
      }
      res.cookie('jwt', token, cookieOptions)*/

      return done(null, user);
    }else{
      return done(null, false, { message: 'Incorrect Password' });
    }
  }

}));


passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, done) =>{
  User.findById(id, (err, user) =>{
    done(err, user);
  })
});
