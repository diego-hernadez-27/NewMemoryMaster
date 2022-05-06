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

module.exports = gamesCtrl;
