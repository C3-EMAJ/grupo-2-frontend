import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useEditarAssistido = () => {
  const [editando, setEditando] = useState(false);

  const editarAssistido = async (data) => {
    try {
      setEditando(true);

      const response = await Api.put("/MinhaRotaDeEdicao", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setEditando(false);
    } catch (error) {
      //console.log(error);
      setEditando(false);
      alert("Ocorreu um erro ao editar o Assistido\n\n", "Código do erro: ", error.message);
    }
  };

  return { editarAssistido, editando };
};