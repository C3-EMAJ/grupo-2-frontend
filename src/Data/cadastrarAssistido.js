import { useState } from "react";
import geralFetch from "./config";

export const useCadastrarAssistido = () => {
  const [cadastrando, setCadastrando] = useState(false);
  const [erro, setErro] = useState(null);

  const cadastrarAssistido = async (data) => {
    try {
      setCadastrando(true);
      setErro(null);

      const response = await geralFetch.post("/MinhaRotaDeCadastro", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setCadastrando(false);
    } catch (error) {
      //console.log(error);
      setErro(error);
      setCadastrando(false);
    }
  };

  return { cadastrarAssistido, cadastrando, erro };
};