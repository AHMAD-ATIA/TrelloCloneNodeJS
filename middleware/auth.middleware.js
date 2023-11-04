const jwt = require("jsonwebtoken");
const BlacklistedToken = require("../model/blacklist");
const config = process.env;

const verifyToken = async (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "keine token verfügbar!!!"
        });
    }
    
    try{
        const decoded = jwt.verify(token, config.JWT_KEY);
        req.user = decoded;
    }
    catch(err){
        return res.status(401).send({
            message: "token ungültig!!!"
        });
    }

    const isBlacklisted = await BlacklistedToken.findeOne({token});
    if(isBlacklisted){
        return res.status(401).send({
            message: "nicht authentifizeirt"

        });

    }

    return next();

}


module.exports = verifyToken;