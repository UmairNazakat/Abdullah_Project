import {user} from "../schema/schema.js";
import {signupmodel} from "../schema/schema.js";
import Jwt from "jsonwebtoken";
 const SECRET_KEY = "Abdullah Project";



// ########################################## Form Controller Start ########################################## 

export const controllerform = async (req, res) =>{
    // const Image = req.file;
    
    const {property_type, city,location,area,priceFrom,priceTo,installment,
        possession,bedrooms,bathrooms, outdoor, interior, otherfeather, utilities, title,description,email,
        mobile,Landline, fields} = req.body;
        // const Image = req.files['propertyImg'][0].filename; 
        const Image = req.files && req.files['propertyImg'] ? req.files['propertyImg'][0].filename : undefined;
        const video = req.files && req.files['propertyVideo'] ? req.files['propertyVideo'][0].filename : undefined;
        const pdf = req.files && req.files['propertypdf'] ? req.files['propertypdf'][0].filename : undefined;
    // const video = req.files['propertyVideo'][0].filename; 
    // const pdf = req.files['propertypdf'][0].filename; 
    // console.log(req.body);
    console.log(req.body.otherfeather);
    //     const Imagess = req.files; 
    // const videoss = req.files; 
    // const pdfss = req.files; 
    const newuser = new user({property_type, city,location,area,priceFrom,priceTo,installment,
        possession,bedrooms,bathrooms, outdoor, interior, otherfeather, utilities, title,description,email,
        mobile,Landline,Image,video,pdf, fields}) 

    try{
        await newuser.save();
        return res.status(201).json({newuser,uu:"ssss"});
    }catch(error){
        return res.status(409).json({message: error.message,error:"error"});

    }
}



// ########################################## Form Controller END ########################################## 



// ########################################## SignUp Controller Start ########################################## 

export const controllerSignup = async (req,res)=>{
const {Name, CompanyName, email, password} = req.body;
const signupmodels = new signupmodel({Name, CompanyName, email, password})
try{
    const alreadyExist = await signupmodel.findOne({email});

    if(alreadyExist){
        // User Already Exist
        return res.status(400).json({
        message:"user Already Exist"
    });
    }

    await signupmodels.save();

    const token = Jwt.sign({email:signupmodels.email, id : signupmodels._Id}, SECRET_KEY);
    // SignUp Successfully
    return res.status(201).json({
        user : signupmodels,
         token : token
        });

}catch(error){
    return res.status(409).json({message: error.message});
}
}
// ########################################## SignUp Controller END ########################################## 



// ########################################## SignIn Controller Start ########################################## 

export const controllerSignin = async (req,res)=>{
const {email, password} = req.body;
try{
const user = await signupmodel.findOne({ email });
if(!user){
    // User Not found
return res.status(400).json({
        message : "user not found"
    });

}
const matchpassword = user.password == password;
if (!matchpassword) {
    // Password doesn't match
    return res.status(400).json({
         message: 'Invalid credentials'
         });
  }

  // Login successful
  const token = Jwt.sign({email : user.email, id : user._Id},SECRET_KEY)
  return res.status(200).json({
     message: 'Login successful',
     token : token
     });

}catch(error){
    return res.status(409).json({message: error.message});

}
}

// ########################################## SignIn Controller END ########################################## 
