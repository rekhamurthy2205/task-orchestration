const jwt = require('jsonwebtoken');


const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
   
    const decoded = jwt.verify(token.split(" ")[1], 'your_secret_key');

    if (decoded.isAdmin) {
      req.user = decoded;  
      next();              
    } else {
      return res.status(403).json({ message: 'Access denied. Not an admin.' });
    }
  } catch (ex) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = {verifyAdminToken}