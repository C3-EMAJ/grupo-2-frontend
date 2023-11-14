import axios from "axios";

const geralFetch  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type":"application/json",
    },
});

export default geralFetch;