import axios from 'axios';


const axiosClient = axios.create({
  baseURL :'https://online-food-server-beta.vercel.app/',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default axiosClient;
