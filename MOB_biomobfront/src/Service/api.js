import axios from "axios";

const api = axios.create({
  
  baseURL: "https://mob-bio-mob.herokuapp.com",
});
 const token = JSON.parse(localStorage.getItem("token"));
 if(token){
  api.defaults.headers.common["Authorization"] = token;
}
export default api;
