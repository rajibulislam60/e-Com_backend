const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // get token
    const token = req.headers["token"].split(" ")[1];
    jwt.verify(token, process.env.JWT_Secret, (error, decode) => {
      if (error) {
        return res.status(401).send({
          success: false,
          msg: "Un-Authorize User",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      msg: "middle ware is not working",
      data: error,
    });
  }
};
