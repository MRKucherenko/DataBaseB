const express = require('express');
const ctrlWrap = require('../helpers/middlewars/ctrlWrap');
const auth = require('../helpers/middlewars/auth');
const validations = require('../helpers/middlewars/validetions');
const { joiDataBaseSchema } = require('../models/dataBase');
const addContact = require('../controllers/dataBase/addContact');
const getContacts = require('../controllers/dataBase/getContacts');
const deleteContact = require('../controllers/dataBase/deleteContact');
const changeContact = require('../controllers/dataBase/changeContact')

const dataBaseRoutes = express.Router();
dataBaseRoutes.post('/addContacts', auth, validations(joiDataBaseSchema), ctrlWrap(addContact));
dataBaseRoutes.get('/getContacts', auth, validations(joiDataBaseSchema), ctrlWrap(getContacts));
dataBaseRoutes.delete('/deleteContact/:id', auth, ctrlWrap(deleteContact));
dataBaseRoutes.patch('/changeContact/:id', auth, validations(joiDataBaseSchema), ctrlWrap(changeContact));

module.exports = dataBaseRoutes;