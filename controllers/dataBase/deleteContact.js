const {DataBase} = require('../../models/dataBase');
const customError = require('../../helpers/customError');

const deleteContacts = async (req, res) => {
  // const {_id} = req.user;
  const {id} = req.params;

  const contactDelete = await DataBase.findOneAndDelete({
    _id: id,
  });

  if(!contactDelete) {
    throw customError(`Contact with id = ${id} Not Found`, 404);
  };

  res.status(200).json({
    status: 200,
    data: contactDelete,
  });

}

module.exports = deleteContacts;