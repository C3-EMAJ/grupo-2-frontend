import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useEditarUsuario = () => {
  const [editando, setEditando] = useState(false);

  const editarUsuario = async (data) => {
    try {
      setEditando(true);

      const response = await Api.put("/MinhaRotaDeEdicao", data);

      // Aqui a resposta do servidor pode ser tratada
      // Por exemplo, se o servidor retornar um ID após o cadastro, pode ser feito algo com ele

      setEditando(false);
    } catch (error) {
      //console.log(error);
      setEditando(false);
      alert(`Ocorreu um erro ao editar o Usuário\n\n Código do erro: ${error.message}`);
    }
  };

  return { editarUsuario, editando };
};