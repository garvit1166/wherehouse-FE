import axios from "axios";

export const fetchTableData = async() => {
    const response = await axios.get('https://wherehousebe.onrender.com/');
    console.log(response.data);
    return response.data
}

export const postTableData = async(body) =>{
   try{
    const response = await axios.post('https://wherehousebe.onrender.com/',body);
    return response.data
   }
   catch{

   }
}