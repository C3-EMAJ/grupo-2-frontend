import { useState } from "react";
import geralFetch from "./config";

export const useCadastrarUsuario = () => {
  const [cadastrando, setCadastrando] = useState(false);

  const cadastrarUsuario = async (data) => {
    try {
      setCadastrando(true);
      const response = await geralFetch.post("/MinhaRotaDeCadastro", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setCadastrando(false);
    } 
    catch (error) {
      //console.log(error);
      alert("Ocorreu um erro ao cadastrar o Usuário\n\n" + "Código do erro: " + error.message);
      setCadastrando(false);
    }
  };

  return { cadastrarUsuario, cadastrando };
};