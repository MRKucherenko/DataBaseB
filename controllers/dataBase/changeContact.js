const { DataBase } = require('../../models/dataBase');
const customError = require('../../helpers/customError');

const changeContact = async (req, res) => {
  const {_id} = req.user;
  const {body} = req;
  const {id} = req.params;

  const contactToChange = await DataBase.findOneAndUpdate({
    _id: id,
  },
  body,
  {
    new: true,
    runValidators: true,
  }
);

  if(!contactToChange) {
    throw customError(`Contact with id=${id} Not Found !`, 404)
  }

  res.status(200).json({
    status: 200,
    data: contactToChange,
  })
}

module.exports = changeContact;