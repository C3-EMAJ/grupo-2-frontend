import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useExcluirAssistido = () => {
  const [excluindo, setExcluindo] = useState(false);

  const excluirAssistido = async (data) => {
    //console.log(data)
    try {
      setExcluindo(true);
      const response = await Api.post("/deleteAssistido/", data);
      setExcluindo(false);
      return response.data.success === true ? alert(response.data.message) : null
    } 
    catch (error) {
      setExcluindo(false);
      return alert(`Ocorreu um erro ao excluir o Assistido\n\n Código do erro: ${error.message}`);
    }
  };

  return { excluirAssistido, excluindo };
};