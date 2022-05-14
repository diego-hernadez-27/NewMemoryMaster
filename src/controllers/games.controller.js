const gamesCtrl = {};

gamesCtrl.renderRutbajo = ('/games/auditiva/RepetirPalabra/Rutbajo', (req, res) => {
  res.render('games/auditiva/RepetirPalabra/Rutbajo')
});

gamesCtrl.renderRutmedio = ('/games/auditiva/RepetirPalabra/Rutmedio', (req, res) => {
  res.render('games/auditiva/RepetirPalabra/Rutmedio')
});

gamesCtrl.renderRutdificil = ('/games/auditiva/RepetirPalabra/Rutdificl', (req, res) => {
  res.render('games/auditiva/RepetirPalabra/Rutdificil')
});

gamesCtrl.renderCodMensajes = ('/games/auditiva/CodMensajes/adivinando', (req, res) => {
  res.render('games/auditiva/CodMensajes/adivinando')
});

gamesCtrl.renderInverBajo = ('/games/visual/PalabrasInvertidas/inverbajo', (req, res) => {
  res.render('games/visual/PalabrasInvertidas/inverbajo')
});

gamesCtrl.renderInverMedio = ('/games/visual/PalabrasInvertidas/invermedio', (req, res) => {
  res.render('games/visual/PalabrasInvertidas/invermedio')
});

gamesCtrl.renderInverAlto = ('/games/visual/PalabrasInvertidas/inveralto', (req, res) => {
  res.render('games/visual/PalabrasInvertidas/inveralto')
});

gamesCtrl.renderSodBajo = ('/games/visual/Sodoku/sodindex', (req, res) => {
  res.render('games/visual/Sodoku/sodindex')
});

gamesCtrl.renderSodMedio = ('/games/visual/Sodoku/sodmedio', (req, res) => {
  res.render('games/visual/Sodoku/sodmedio')
});

gamesCtrl.renderSodAlto = ('/games/visual/Sodoku/sodalto', (req, res) => {
  res.render('games/visual/Sodoku/sodalto')
});

gamesCtrl.renderHexBajo = ('/games/muscular/Hexamano/hexbajo', (req, res) => {
  res.render('games/muscular/Hexamano/hexbajo')
});

gamesCtrl.renderHexMedio = ('/games/muscular/Hexamano/hexmedio', (req, res) => {
  res.render('games/muscular/Hexamano/hexmedio')
});

gamesCtrl.renderHexDificil = ('/games/muscular/Hexamano/hexdificil', (req, res) => {
  res.render('games/muscular/Hexamano/hexdificil')
});

gamesCtrl.renderSimonBajo = ('/games/visual/Simon/simonbajo', (req, res) => {
  res.render('games/visual/Simon/simonbajo')
});

gamesCtrl.renderSimonMedio = ('/games/visual/Simon/simonmedio', (req, res) => {
  res.render('games/visual/Simon/simonmedio')
});

gamesCtrl.renderSimonDificil = ('/games/visual/Simon/simondificil', (req, res) => {
  res.render('games/visual/Simon/simondificil')
});

module.exports = gamesCtrl;
