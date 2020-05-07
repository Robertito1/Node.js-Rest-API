// exports.verifyToken = (req, res, next) => {
//   const bearerHeader = req.headers["authorisation"];
//   if (!bearerHeader) {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res
//       .status(403)
//       .send({ status: false, message: "Youre not allowed to do that" });
//   }
