const express = require('express')
const router = express.Router();
const controller = require('../controllers/UserController');
const UserController = require('../controllers/UserController');


router.route('/api/users')
.get(controller.findAll)
.post(controller.insertOne)



router.route('/api/users/:code')
.get(controller.findOne)
.put(controller.updateOne)
.delete(controller.deleteOne)

router.route('/login')
.post(UserController.login)

module.exports = router;
