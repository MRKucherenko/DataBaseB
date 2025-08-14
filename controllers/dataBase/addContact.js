const {DataBase} = require('../../models/dataBase');

const addContsct = async (req, res) => {
  // const {_id} = req.user;
  const {body} = req;

  const addContsct = await DataBase.create({
    ...body,
  });

  res.status(201).json({
    status: 201, 
    response: 'success',
    data: {
      result: addContsct,
    }
  });
}

module.exports = addContsct;