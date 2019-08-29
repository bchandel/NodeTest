var express = require('express');
var userController = require('../controllers/user');
var router = express.Router();

router.post('/', function(req,res){
    userController.saveUser(req, res)
});

module.exports = router;