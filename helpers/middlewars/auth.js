const { User } = require('../../models/user');
const customError = require('../customError');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = process.env;

const auth = async (req, res, next) => {
  const {authorization = ''} = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if(bearer !== 'Bearer' || !token) {
      throw customError('Anauthoraized', 401);
    };

    const {id} = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if(!user || !user.token || token !== user.token) {
      throw customError('Anauthorized', 401);
    };

    req.user = user;
    next();
  } catch (error) {
    if(error.message === 'Invalid signatyre') {
      error.status = 401;
    }
    next(error);
  }
}

module.exports = auth;