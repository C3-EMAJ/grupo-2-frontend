import { useState } from "react";
import geralFetch from "./config";

export const useExcluirAssistido = () => {
  const [excluindo, setExcluindo] = useState(false);
  const [erro, setErro] = useState(null);

  const excluirAssistido = async (assistidoId) => {
    try {
      setExcluindo(true);
      setErro(null);

      const response = await geralFetch.delete(`/MinhaRotaDeExclusao/${assistidoId}`);

      // Aqui a resposta do servidor pode ser tratada
      // pode verificar se o assistido foi excluído com sucesso

      setExcluindo(false);
    } catch (error) {
      setErro(error);
      setExcluindo(false);
    }
  };

  return { excluirAssistido, excluindo, erro };
};