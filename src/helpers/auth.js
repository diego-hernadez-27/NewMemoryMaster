const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){

        return next();
    }
    res.redirect('/login');

}

helpers.isnotAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){

      res.redirect('/menu');
  }
  return next();

}

module.exports = helpers;
