import express from "express";
import { User } from "../entities/User";
const router = express.Router();

// post man localhost:8080/api/user
router.post("/api/user", async(req,res)=>{
    // res.send("hello");
    const {
        firstName,
        lastName,
        email,
        phone
    } = req.body;
    const user = User.create(
        {
            first_name:firstName,
            last_name:lastName,
            email,
            phone:phone
        });

        await user.save();
        return res.json(user);
});
export { router as createUserRouter };

// ex 
//  {
//    "firstName":"david",
//    "lastName":"hodefi",
//    "email":"davidhodefi0@walla.com",
//    "phone":"0509660488"
//  }
  
