const express = require('express');
const router = express.Router();
const { onboardUser, updateUserProfile} = require('../controllers/usercontroller');
// POST request to onboard a user
router.post('/onboard', onboardUser);
router.put('/:userId', updateUserProfile);
module.exports = router;
