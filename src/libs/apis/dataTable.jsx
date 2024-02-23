import axios from "axios";
import { api } from "./base"

export const fetchTableData = async() => {
    const response = await axios.get('http://localhost:3001/');
    console.log(response.data);
    return response.data
}

export const postTableData = async(body) =>{
   try{
    const response = await axios.post('http://localhost:3001/',body);
    return response.data
   }
   catch{

   }
}