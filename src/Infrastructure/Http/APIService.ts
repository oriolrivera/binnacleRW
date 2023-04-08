import axios from "axios";

const baseURL = 'http://localhost:1337/api/';

const APIService = axios.create({ baseURL });

export default APIService;