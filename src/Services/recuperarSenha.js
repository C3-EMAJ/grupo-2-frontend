import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useRecuperarSenha = () => {
  const [loading, setLoading] = useState(false);

  const recuperarSenha = async (data) => {

    try {
      setLoading(true);
      const response = await Api.post("/recuperarSenha/", data);

      if (response.data.success && response.data.success === false){
        setLoading(false);
        return alert(response.data.message)
      }

      else if(response.data.success && response.data.success === true){
        setLoading(false);
        return alert(response.data.message)
      }
    } 

    catch (error) {
      setLoading(false);
      return alert(`Ocorreu um erro, tente novamente mais tarde. \n\n Código do erro: ${error.message}`)
    }

  };

  return { recuperarSenha, loading };
};