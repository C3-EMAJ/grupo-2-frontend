import { useState } from "react";

//BaseURL da API
import geralFetch from "./config";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    try {
      setLoading(true);

      const response = await geralFetch.post("/MinhaRotaDeLogin", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setLoading(false);
    } catch (error) {
      //console.log(error);
      setLoading(false);
      alert("Ocorreu um erro ao fazer login\n\n" + "Código do erro: " + error.message);
    }
  };

  return { login, loading };
};