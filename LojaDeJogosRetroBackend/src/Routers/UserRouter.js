const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController');

router.route('/api/users')
.get(UserController.findAll)
.post(UserController.insertOne)

router.route('/api/users/:code')
.get(UserController.findOne)
.put(UserController.updateOne)
.delete(UserController.deleteOne)

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
