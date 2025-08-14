const {User} = require('../../models/user');
const createToken = require('../../helpers/createToken');
const customError = require('../../helpers/customError');

const login = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  const pass = user?.verifyPassword(password);

  if(!user || !pass) {
    customError('Email or Password are not valid');
  };

  const payload = {
    id: user._id
  };
 
  const token = createToken(payload);
  await User.findByIdAndUpdate(user._id, {token});

  res.status(200).json({
    response: 'success',
    status: 200.,
    data: {
      name: user.name,
      email: user.email,
      token,
      role: user.role,
    }
  })
}

module.exports = login;