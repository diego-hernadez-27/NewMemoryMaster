const { Router } = require('express');
const router = Router();

const { renderLoginForm, signin, register, logout } = require('../controllers/users.cotroller.js')

router.get('/login', renderLoginForm);

router.post('/signin', signin);

router.post('/register', register);

router.get('/logout', logout);

module.exports = router;
