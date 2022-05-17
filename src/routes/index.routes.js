const { Router } = require('express');
const router = Router();

const { renderIndex, renderMenu, renderPerfil, renderEstresado, renderTipoDeMemoria, renderNivelesEcoica,
renderNivelesEconica, renderNivelesMuscular} = require('../controllers/index.controller')

const { isAuthenticated, isnotAuthenticated } = require('../helpers/auth');

router.get('/', isnotAuthenticated, renderIndex);

router.get('/menu', isAuthenticated, renderMenu);

router.get('/perfil', isAuthenticated, renderPerfil);

router.get('/estresado', isAuthenticated, renderEstresado);

router.get('/tipodememoria', isAuthenticated, renderTipoDeMemoria);

router.get('/nivelesecoica', isAuthenticated, renderNivelesEcoica);

router.get('/niveleseconica', isAuthenticated, renderNivelesEconica);

router.get('/nivelesmuscular', isAuthenticated, renderNivelesMuscular);

module.exports = router;
