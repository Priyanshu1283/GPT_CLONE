
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

// Authentication middleware to protect routes

async function authUser(req, res, next) {
    const  {token} =req.cookies;
    if(!token){
        return res.status(401).json({message: "Unauthorized: No token provided"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        req.user = user; // Attach user to request object
        next();
    }catch(err){
        return res.status(401).json({message: "Unauthorized: Invalid token"});
    }
}
module.exports = {authUser};