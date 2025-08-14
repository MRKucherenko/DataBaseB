const ctrlWrap = (ctrl) => {
  
  return async(req, response, next) =>{
    try {
      await ctrl(req, response, next)
    } catch (error) {
      next(error)
    }
  }
};

module.exports = ctrlWrap;