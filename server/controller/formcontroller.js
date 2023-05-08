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
        const status = "pending";
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
        mobile,Landline,Image,video,pdf,status, fields}) 

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
const status = "pending";
const signupmodels = new signupmodel({Name, CompanyName, email, password, status})
try{
    const alreadyExist = await signupmodel.findOne({email});

    if(alreadyExist){
        throw Error("User Aready Exist !")
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
// const checkStatus = user.status == "pending" || user.status == "Rejected";
// const checkStatus = user.status == "pending";
// if (checkStatus) {
//     // Password doesn't match
//     return res.status(400).json({
//          message: 'User is in pending'
//          });
//   }

  // Login successful
  const token = Jwt.sign({email : user.email, id : user._Id},SECRET_KEY)
  return res.status(201).json({
     message: 'Login successful',
     token : token
     });

}catch(error){
    return res.status(409).json({message: error.message});

}
}
// ########################################## SignIn Controller END ########################################## 


// ########################################## Dashboard Controller Start ########################################## 

export const controllergetUsers = async(req,res)=>{
    try{
        const users = await signupmodel.find().count();
        const pendingUser = await signupmodel.find({status: "pending"}).count();
        const property = await user.find().count();
        const pendingproperty = await user.find({ status: "pending" }).count();
        const propertyDetails = await user.find();
        return res.status(200).json({
            
            users: users,
            property :property, 
            pendingUser : pendingUser, 
            pendingproperty : pendingproperty,
            propertyDetails : propertyDetails 
        });
 
        }catch(error){
            return res.status(409).json({message: error.message});
        
        }   
}

// ########################################## Dashboard Controller END ########################################## 


// ########################################## Customer Controller Start ########################################## 
export const controllerGetCustomers = async(req,res)=>{
try{
    const allUsers = await signupmodel.find();
    return res.status(200).json({
        allUsers:allUsers
    })

}catch(error){
    return res.status(400).json({message:error.message})
}
}

// ########################################## Customer Controller END ########################################## 


// ########################################## Pending Customers Controller Start ##########################################
export const controllerGetpendingCustomers = async(req,res)=>{
    try{
        const pendingCustomers = await signupmodel.find({status : "pending"})
        return res.status(200).json({
            pendingCustomers 
        })
    }catch(error){
        return res.status(409).json({message : error.message})
    }
    
}
// ########################################## Pending Customers Controller END ########################################## 


// ########################################## Approval Status Change Controller Start ##########################################
export const controllerCustomerStatus = async(req,res)=>{
    try{
    const {id, message} = req.body
     
        const Customers = await signupmodel.find({_id : id});
        if(!Customers){
            throw Error("user is found");
        }
        if(message == "Approved"){
            await signupmodel.findByIdAndUpdate({_id: id},{status: message},{new :true})
        }else{
            await signupmodel.findByIdAndUpdate({_id: id},{status: message},{new :true})    
        }
         res.status(200).json({message : "Update successfully"})
        
    }catch(error){
        return res.status(409).json({message : error.message})
    }
    
}
// ########################################## Approval Status Change Controller END ########################################## 


 