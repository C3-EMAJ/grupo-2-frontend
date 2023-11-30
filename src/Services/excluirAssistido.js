import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useExcluirAssistido = () => {
  const [excluindo, setExcluindo] = useState(false);
  const [response, setResponse] = useState();

  const excluirAssistido = async (data) => {
    //console.log(data)
    try {
      setExcluindo(true);
      setResponse(await Api.post("/deleteAssistido/", data));
      setExcluindo(false);
      return response.data.success === true ? alert(response.data.message) : null
    } 
    catch (error) {
      setExcluindo(false);
      return response.data.success === false ? alert(response.data.message) : null
    }
  };

  return { excluirAssistido, excluindo };
};