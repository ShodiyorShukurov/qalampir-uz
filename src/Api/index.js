import axios from "axios";
import { API_PATH, APP_QALAMPIR_TOKEN } from "../Utils/constants";

export const API = axios.create({
  baseURL: API_PATH,
  headers: {
    Authorization: "Token" + sessionStorage.getItem(APP_QALAMPIR_TOKEN),
  },
});
