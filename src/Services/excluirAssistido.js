import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useExcluirAssistido = () => {
  const [excluindo, setExcluindo] = useState(false);

  const excluirAssistido = async (data) => {

    try {
      setExcluindo(true);
      const response = await Api.post("/deleteAssistido/", data);

      if (response.data.success && response.data.success === false){
        setExcluindo(false);
        return alert(response.data.message)
      }

      else if(response.data.success && response.data.success === true){
        setExcluindo(false);
        return alert(response.data.message)
      }
    } 

    catch (error) {
      setExcluindo(false);
      return alert(`Ocorreu um erro ao excluir o assistido. \n\n Código do erro: ${error.message}`)
    }
    
  };

  return { excluirAssistido, excluindo };
};