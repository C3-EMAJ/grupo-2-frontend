import axios from "axios";

const Api  = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers:{
        "Content-Type":"application/json",
        Authorization: localStorage.getItem("token")
    },
});

export default Api;