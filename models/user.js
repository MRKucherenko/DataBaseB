const {
  Schema,
  model
} = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const ROLE = ['user', 'admin', 'guest'];

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    uniqui: [true, 'email must be unique'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 8,
  },
  token: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ROLE,
    required: true,
    default: ROLE[2]
  },
}, {
    versionKey: false,
    timestamps: true,
})

userSchema.methods.setPassword = async function(password) {
  this.password = await bcrypt.hash(password, 10)
};

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compare(password, this.password)
}

const User = model('user', userSchema);
const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});

const joiLoginSchema = Joi.object({ 
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
}