import axios from "axios";

const Api  = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers:{
        "Content-Type":"application/json",
        //Authorization: localStorage.getItem("token")
    },
});

export default Api;

//API com a lista e usuários: https://jsonplaceholder.typicode.com
//API de login: https://reqres.in/api/