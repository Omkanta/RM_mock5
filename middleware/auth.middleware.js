const jwt=require("jsonwebtoken");
require("dotenv").config();

const auth=(req,res,next)=>{
const token =req.headers.authorization;
if(token){
    const decode= jwt.verify(token.split(" ")[1], process.env.secretKey);
    if(decode){
        next()
    }else{
        res.send({"msg":"Plese Login First!!"})
    }
}else{
    res.send({"msg":"Plese Login First!!"})
}
}

module.exports={auth}