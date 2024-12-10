const express = require('express');
const authenticated = require('../middlewares/authenticated');
const router = express.Router({ mergeParams: true });

router.use('/', require('./auth'));
//В продакшене добавить авторизацию authenticated
router.use('/exercises', require('./exercises'));
router.use('/clients', require('./clients'));
router.use('/clients-training', require('./clients-training'));

module.exports = router;
