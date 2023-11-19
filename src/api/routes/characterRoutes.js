const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/characterprofiles', characterController.getAllCharacterProfiles);
router.get('/characterprofile/:id', characterController.getSingleCharacterProfile);
router.post('/characterprofiles', characterController.createCharacterProfile);
router.delete('/characterprofile/:id', characterController.deleteCharacterProfile);

module.exports = router;