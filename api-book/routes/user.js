
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
router.post('/add/user', (req, res)=> {
    console.log("we are in pot user")
    userController.addUser(req, res)
})
router.get('/users', (req, res)=> {
    console.log("we are in users get route");
    userController.getUsers(req, res)

})
router.post('/user/login', (req, res)=> {
    console.log("we are going to add ");
    userController.doLogin(req, res);
})
module.exports = router;