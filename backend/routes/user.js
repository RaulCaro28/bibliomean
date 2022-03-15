const express = require("express");
const router = express.Router();
const  User  = require("../models/user");


router.post("/", async (req,res) => {
  let user = await User.findOne({email: req.body.email});
  if(user){
    res.status(400).send("El ususario existe") 
  }else{
    user = new User ({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });    
    
    const jwtToken = user.generateJWT();
    const result = await user.save()
    res.status(200).send({jwtToken});
}
});

router.get("/", async(req,res) =>{
const user_list = await User.find();
res.send(user_list)
});


module.exports = router;
