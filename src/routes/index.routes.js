const { Router } = require('express');
const router = Router();

const { renderIndex, renderMenu, renderPerfil } = require('../controllers/index.controller')

const{isAuthenticated} = require('../helpers/auth');

router.get('/', renderIndex);

router.get('/menu', isAuthenticated ,renderMenu);

router.get('/perfil', isAuthenticated, renderPerfil);

module.exports = router;
