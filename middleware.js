const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  const bearer = bearerHeader.split("  ")[1];
  if ((bearer = null))
    return res.status(401).send({ status: false, message: "Access denied" });

  jwt.verify(bearer, "somesecretkey");
  next();
};
