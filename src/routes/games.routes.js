const { Router } = require('express');
const router = Router();

const { renderRutbajo, renderRutmedio, renderRutdificil, renderCodMensajes } = require('../controllers/games.controller')

const{isAuthenticated} = require('../helpers/auth');

router.get('/games/auditiva/RepetirPalabra/Rutbajo', isAuthenticated, renderRutbajo);

router.get('/games/auditiva/RepetirPalabra/Rutmedio', isAuthenticated, renderRutmedio);

router.get('/games/auditiva/RepetirPalabra/Rutdificil', isAuthenticated, renderRutdificil);

router.get('/games/auditiva/CodMensajes/adivinando', isAuthenticated, renderCodMensajes);

module.exports = router;
