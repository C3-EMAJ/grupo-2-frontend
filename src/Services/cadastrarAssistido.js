import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useCadastrarAssistido = () => {
  const [cadastrando, setCadastrando] = useState(false);

  const cadastrarAssistido = async (data) => {

    try {
      setCadastrando(true);
      const response = await Api.post("/assistido/", data);

      if (response.data.success && response.data.success === false){
        setCadastrando(false);
        return alert(response.data.message)
      }

      else if(response.data.success && response.data.success === true){
        setCadastrando(false);
        return alert(response.data.message)
      }
    } 

    catch (error) {
      setCadastrando(false);
      return alert(`Ocorreu um erro ao cadastrar o assistido. \n\n Código do erro: ${error.message}`)
    }
  
  };

  return { cadastrarAssistido, cadastrando };
};