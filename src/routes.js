const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const router = Router();

router.get('/users', UserController.index);
router.get('/users/:user_id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users', UserController.deleteAll);
router.delete('/users/:user_id', UserController.delete);

module.exports = router;
