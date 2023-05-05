import mongoose from "mongoose";

const userschema = mongoose.Schema({
    property_type : String,
  city : String,
  location : String,
  area : String,
  priceFrom : String,
  priceTo : String,
  installment : String,
  possession : String,
  bedrooms : String,
  bathrooms : String, 
  outdoor : [],
  interior : [],
  otherfeather : [],
  utilities : [],
  title : String,
  description : String,
  email : String,
  mobile : String,
  Landline : String,
  Image : String,
  video : String,
  pdf : String,
  fields : []
})

export const user = mongoose.model('realEstate',userschema);

// export default user;



const signupSchema = mongoose.Schema({
  Name : String,
  CompanyName : String,
  email : String,
  password : String
})

export const signupmodel = mongoose.model('signup',signupSchema); 