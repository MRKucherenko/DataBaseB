const {
  Schema,
  model
} = require('mongoose');
const Joi = require('joi');

const dataBaseSchema = Schema({
  fullName: {
    type: String,
    require: [true, 'Name is Required']
  },
  dateOfBirth: {
    type: String,
    require: [true, 'Date is Required']
  },
  address: {
    type: String,
    require : [true, 'Address is Required']
  },
  phone: {
    type: String,
    require: [true, 'Phone number is Required'],
    unique: [true, 'Phone must be unique']
  },
  email: {
    type: String,
    require: [true, 'Email is Required'],
    unique: [true, 'Email must be unique']
  },
},
  {
    versionKey: false,
    timestamps: true
  })

const DataBase = model('dataBase', dataBaseSchema);
const joiDataBaseSchema = Joi.object({
  fullName: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required(),
})

module.exports = {
  DataBase,
  joiDataBaseSchema,
}