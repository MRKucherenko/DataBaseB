const {DataBase} = require('../../models/dataBase');

const getContacts = async (req, res) => {
  const {page = 1, limit = 20} = req.query;
  const skip = (page - 1) * limit;

  const allContacts = await DataBase.find({}, '-createdAt -updatedAt', {
    skip,
    limit: +limit,
  })

  res.status(200).json({
    status: 200,
    data: allContacts,
    total: allContacts.length,
  });
}

module.exports = getContacts;