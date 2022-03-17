const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passewordField: 'password'
}, async (email, password, done) => {

  //Confirmar si coinciden los nombres de usuario
  const user = await User.findOne({username})
  if (!user) {
    return done(null, false, { message: 'Not User Found'});
  } else{
    //Coincidencia de contraseñaf
    const match = await User.matchPassword(password);
    if(match) {
      return done(null, user);
    }else{
      return done(null, false, { message: 'Incorrect Password' });
    }
  }

}));


passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, user) =>{
  User.findById(id, (err, user) =>{
    done(err, user);
  })
});
