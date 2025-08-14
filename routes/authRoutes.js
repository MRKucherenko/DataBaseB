const express = require('express');
const validations = require('../helpers/middlewars/validetions');
const ctrlWrap = require('../helpers/middlewars/ctrlWrap');
const register = require('../controllers/auth/register');
const {joiRegisterSchema, joiLoginSchema} = require('../models/user');
const login = require('../controllers/auth/login');
const auth = require('../helpers/middlewars/auth');
const logout = require('../controllers/logout');

const authRouter = express.Router();

authRouter.post('/register', validations(joiRegisterSchema), ctrlWrap(register));
authRouter.post('/login', validations(joiLoginSchema), ctrlWrap(login));
authRouter.post('/logout', auth, ctrlWrap(logout));

module.exports = authRouter;