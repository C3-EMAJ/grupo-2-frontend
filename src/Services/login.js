import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    try {
      setLoading(true);

      const response = await Api.post("/login/", data);

      if (response) {
        setLoading(false);

        //console.log(response.data)

        localStorage.setItem("name", response.data.name);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("image", response.data.image);
        //localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        
      }

    } 
    catch (error) {
      //console.log(error);
      setLoading(false);
      alert(`Ocorreu um erro ao fazer login \n\n Código do erro: ${error.message}`);
    }
  };

  return { login, loading };
}