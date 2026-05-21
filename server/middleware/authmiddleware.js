const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(401).json({
            message: "No Token provided",
            success: false,
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({
            message: "Invalid or Expired token",
            success: false,
        });
    }
};

module.exports = middleware;