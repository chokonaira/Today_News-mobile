import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "5a5316ec9d0e46f5bb7474eb91099727",
  },
});
