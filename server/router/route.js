const express = require('express');
const controller = require('../controller/controller');

const router = express.Router();

/* get request */

router.route('/user/:username').get(controller.getUser); // user with username
router.route('/genetateOTP').get(controller.genetateOTP); // genetate random OTP
router.route('/verifyOTP').get(controller.verifyOTP); // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset  all the variable

/* post request */

router.route('/register').post(controller.register); // register user
//router.route('/registerMail').post(controller); // send the mail
//router.route('/authenticate').post(); // authenticate user
router.route('/login').post(controller.login); // login in app

/* put request */

router.route('/updateuser').put(controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.resetPassword); // use to reset password 

module.exports = router;