const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');

usersCtrl.renderLoginForm = (req, res) => {
  res.render('./login');
}

usersCtrl.signin = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/menu',
  failureFlash: true
})

usersCtrl.register = async (req, res) => {
  //const errors = [];
  const {name, appat, apmat, email, username, password} = req.body;
  /*if(password.length < 8){
    errors.push({text: 'La contrseña debe tener minimo 8 caracteres.'});
  }
  if(name.length > 20){
    errors.push({text: 'El nombre es muy largo.'});
  }
  if(appat.length > 20){
    errors.push({text: 'El apellido paterno es muy largo.'});
  }
  if(apmat.length > 20){
    errors.push({text: 'El apellido materno es muy largo.'});
  }
  if(email.length > 30){
    errors.push({text: 'El correo electronico es muy largo.'});
  }
  if(username.length > 30){
    errors.push({text: 'El nombre de usuario es muy largo.'});
  }
  if(errors.length > 0){
    res.render('login', {
      errors
    })
  } else{*/
    const emailUser = await User.findOne({email: email});
    if (emailUser){
      //Poner una alguna alerta de que el usuario esta repetido, ya me dio huevita
      console.log('usuario repetido');
      res.redirect('/login');
    }else {
      const newUser = new User({name, appat, apmat, email, username, password});
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      //Escribir un mensaje de registro satisfactorio, porfas de usuario
      console.log('registro satisfactorio');
      res.redirect('/login');
    }
  //}
}

usersCtrl.logout = (req, res) => {
  res.send('logout');
}

module.exports = usersCtrl;
