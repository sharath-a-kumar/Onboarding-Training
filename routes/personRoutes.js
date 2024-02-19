// routes/personRoutes.js

const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/people', personController.createPerson);
router.get('/people', personController.getAllPeople);
router.get('/people/:id', personController.getPersonById);
router.put('/people/:id', personController.updatePersonById);
router.delete('/people/:id', personController.deletePersonById);

module.exports = router;
