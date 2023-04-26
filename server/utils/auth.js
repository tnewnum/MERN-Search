const jwt = require("jsonwebtoken");
const secret = "mysecretsshhhhh";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    let token = req.headers.authorization;

    if (token) {
      token = token.split(" ")[1];
    }

    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded.user;
      next();
    } catch (error) {
      console.error(err);
      throw new Error("Invalid Token!");
    }
  },
};
