const express = require('express');
const formController = require('../controllers/form');

const entrada_router = express.Router();

entrada_router.post('/saveForm', formController.saveForm);

module.exports = entrada_router;
