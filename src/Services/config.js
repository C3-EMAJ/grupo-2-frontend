import axios from "axios";

const geralFetch  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type":"application/json",
    },
});

export default geralFetch;

//API com a lista e usuários: https://jsonplaceholder.typicode.com
//API de login: https://reqres.in/api/