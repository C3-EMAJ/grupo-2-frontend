import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useCadastrarAssistido = () => {
  const [cadastrando, setCadastrando] = useState(false);

  const cadastrarAssistido = async (data) => {
    try {
      setCadastrando(true);

      const response = await Api.post("/assistido", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setCadastrando(false);
    } catch (error) {
      //console.log(error);
      setCadastrando(false);
      alert(`Ocorreu um erro ao cadastrar o Assistido\n\n Código do erro: ${error.message}`);
    }
  };

  return { cadastrarAssistido, cadastrando };
};