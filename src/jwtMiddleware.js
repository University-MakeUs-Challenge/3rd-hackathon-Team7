const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    verifyToken: async (req, res, next) => {
        const jwtToken = req.headers.authorization;
        try {
            const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
            if(decoded) {
                req.email = decoded.email;
                console.log(decoded.email);
                next();
            } else {
                return res.send('JWT_VERIFY_ERROR');
            }
        } catch(err) {            
            return res.send('JWT_ERROR');
        }
    }
}