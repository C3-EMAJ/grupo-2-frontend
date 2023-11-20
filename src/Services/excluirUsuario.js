import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useExcluirUsuario = () => {
  const [excluindo, setExcluindo] = useState(false);

  const excluirUsuario = async (userId) => {
    try {
      setExcluindo(true);

      const response = await Api.post("/MinhaRotaDeExclusao/", userId);

      // Aqui a resposta do servidor pode ser tratada
      // pode verificar se o usuário foi excluído com sucesso

      setExcluindo(false);
    } catch (error) {
      setExcluindo(false);
      alert("Ocorreu um erro ao excluir o Usuário\n\n" + "Código do erro: " + error.message);
    }
  };

  return { excluirUsuario, excluindo };
};