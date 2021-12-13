const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const u_id = decodedToken.u_id;
    if (req.body.u_id && req.body.u_id !== u_id) {
      throw "403: unauthorized request.";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Requête non authentifiée !"),
    });
  }
};
