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
        return await axios.post(`${URL}/signup`,data)
    }catch(error){
        console.log("error occur in api file " + error)
    }
}
