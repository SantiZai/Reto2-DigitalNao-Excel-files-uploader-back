import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // verify if exists the x-auth-token header
  const token = req.header("x-auth-token");
  !token ??
    res.status(401).json({ message: "No se encuentra un token válido" });
  try {
    // verify if the token is valid
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token no válido" });
  }
};
