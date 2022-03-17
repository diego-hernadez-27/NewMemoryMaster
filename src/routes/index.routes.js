const { Router } = require('express');
const router = Router();

const { renderIndex, renderMenu } = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/menu', renderMenu);

module.exports = router;
