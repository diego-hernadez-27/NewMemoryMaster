const indexCtrl = {};

indexCtrl.renderIndex = ('/', (req, res) => {
  res.render('index')
});

indexCtrl.renderMenu = ('/menu', (req, res) => {
  res.render('menu')
});

module.exports = indexCtrl;
