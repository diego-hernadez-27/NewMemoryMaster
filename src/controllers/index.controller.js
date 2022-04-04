const indexCtrl = {};

indexCtrl.renderIndex = ('/', (req, res) => {
  res.render('index')
});

indexCtrl.renderMenu = ('/menu', (req, res) => {
  res.render('menu')
});

indexCtrl.renderPerfil = ('/perfil', (req, res) => {
  res.render('perfil')
});

module.exports = indexCtrl;
