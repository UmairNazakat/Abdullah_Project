import axios from "axios";
const URL = "http://localhost:8000";
export const apiformdata = async (data) => {
    try{
        return await axios.post(`${URL}/form`,data)
    }catch(error){
        console.log("error occur in api file " + error)
    }
}
export const signup = async (data) => {
    try{
        return await axios.post(`${URL}/signup`,data)
    }catch(error){
        console.log("error occur in api file " + error)
    }
}
export const signin = async (data) => {
    try{
        return await axios.post(`${URL}/login`,data)
    }catch(error){
        console.log("error occur in api file " + error)
    }
}



export const dashboarddata = async()=>{
const {data} = await axios.get(`${URL}/Dashboard`)
      return data;
  
  } 
  export const GetCustomers = async() => {
    try {
      const { data } = await axios.get(`${URL}/Customers`);
      return data;
    } catch(error) {
    //   console.error(error);
      throw error;
    }
  } 

  export const GetpendingCustomers = async ()=>{
    try{
        const {data} = await axios.get(`${URL}/pendingCustomers`);
        return data
        // return console.log(data);
        
    }catch(error){
        console.log("error occur in api file  pending Users " + error)

    }
  }


  export const Getpendingproperties = async ()=>{
    try{
        const {data} = await axios.get(`${URL}/pendingProperties`);
        return data
        // return console.log(data);
        
    }catch(error){
        console.log("error occur in api file  pending properties " + error)

    }
  }
 
  export const statuschange = async (data)=>{
    try{
        return await axios.put(`${URL}/statuschange`,data);
    }catch(error){
        console.log("error occur in api file statuschange "+ data.id );
    }
  } 
  export const statusPropertychange = async (data)=>{
    try{
        return await axios.put(`${URL}/statusPropertychange`,data);
    }catch(error){
        console.log("error occur in api file statuschange "+ data.id );
    }
  } 
 