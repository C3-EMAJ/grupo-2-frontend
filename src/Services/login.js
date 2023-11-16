import { useState } from "react";

//BaseURL da API
import geralFetch from "./config";
import axios from "axios";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    try {
      setLoading(true);

      const response = await axios.post("https://reqres.in/api/login", data);

      if (response) {
        setLoading(false);

        //console.log(response.data)

        localStorage.setItem("name", response.data.name)
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("funcao", response.data.funcao)
        localStorage.setItem("image", response.data.image)
        localStorage.setItem("token", response.data.token)

        alert("Usuário logado com sucesso!")
      }

    } catch (error) {
      //console.log(error);
      setLoading(false);
      alert("Ocorreu um erro ao fazer login\n\n" + "Código do erro: " + error.message);
    }
  };


  return { login, loading };
};

export const autenticado = () => {
  const token = localStorage.getItem("token");
  return token && token !== undefined  ? true : false
}

export const logout = () => {
  localStorage.clear()
}

//E-mail: eve.holt@reqres.in
//Senha: cityslicka
//Token: QpwL5tke4Pnpja7X4