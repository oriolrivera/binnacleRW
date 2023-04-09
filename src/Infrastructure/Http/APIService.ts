import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const APIService = axios.create({ baseURL });

export default APIService;