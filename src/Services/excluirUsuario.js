import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useExcluirUsuario = () => {
  const [excluindo, setExcluindo] = useState(false);

  const excluirUsuario = async (data) => {
    //console.log(data)
    try {
      setExcluindo(true);
      const response = await Api.post("/deleteUser/", data);
      setExcluindo(false);
      return response.data.success === true ? alert(response.data.message) : null
    } 
    catch (error) {
      setExcluindo(false);
      return alert(`Ocorreu um erro ao excluir o Usuário\n\n Código do erro: ${error.message}`);
    }
  };

  return { excluirUsuario, excluindo };
};