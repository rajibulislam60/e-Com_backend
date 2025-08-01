const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Get token from custom header
    const rawToken = req.headers["token"];
    if (!rawToken || !rawToken.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        msg: "No token provided in 'token' header",
      });
    }

    const token = rawToken.split(" ")[1];

    jwt.verify(token, process.env.JWT_Secret, (error, decode) => {
      if (error) {
        return res.status(401).send({
          success: false,
          msg: "Unauthorized User",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Middleware error",
      data: error.message,
    });
  }
};
