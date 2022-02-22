import axios from "axios";

const apiviacep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export default apiviacep;
