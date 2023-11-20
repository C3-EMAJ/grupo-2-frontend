import axios from "axios";

const Api  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type":"application/json",
    },
});

export default Api;

//API com a lista e usuários: https://jsonplaceholder.typicode.com
//API de login: https://reqres.in/api/