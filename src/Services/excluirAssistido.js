import { useState } from "react";

//BaseURL da API
import geralFetch from "./config";

export const useExcluirAssistido = () => {
  const [excluindo, setExcluindo] = useState(false);

  const excluirAssistido = async (assistidoId) => {
    try {
      setExcluindo(true);

      const response = await geralFetch.delete("/MinhaRotaDeExclusao/", assistidoId);

      // Aqui a resposta do servidor pode ser tratada
      // pode verificar se o assistido foi excluído com sucesso

      setExcluindo(false);
    } catch (error) {
      setExcluindo(false);
      alert("Ocorreu um erro ao excluir o Assistido\n\n" + "Código do erro: " + error.message);
    }
  };

  return { excluirAssistido, excluindo };
};