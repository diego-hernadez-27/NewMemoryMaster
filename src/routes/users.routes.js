const { Router } = require('express');
const router = Router();

const { renderLoginForm, signin, register, logout } = require('../controllers/users.cotroller.js')

const{isnotAuthenticated} = require('../helpers/auth');

router.get('/login', isnotAuthenticated, renderLoginForm);

router.post('/signin', signin);

router.post('/register', register);

router.get('/logout', logout);

module.exports = router;
