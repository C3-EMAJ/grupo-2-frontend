import { useState } from "react";
import geralFetch from "./config";

export const useExcluirUsuario = () => {
  const [excluindo, setExcluindo] = useState(false);
  const [erro, setErro] = useState(null);

  const excluirUsuario = async (userId) => {
    try {
      setExcluindo(true);
      setErro(null);

      const response = await geralFetch.delete(`/MinhaRotaDeExclusao/${userId}`);

      // Aqui a resposta do servidor pode ser tratada
      // pode verificar se o usuário foi excluído com sucesso

      setExcluindo(false);
    } catch (error) {
      setErro(error);
      setExcluindo(false);
    }
  };

  return { excluirUsuario, excluindo, erro };
};