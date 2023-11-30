import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useEditarAssistido = () => {
  const [editando, setEditando] = useState(false);

  const editarAssistido = async (data) => {

    try {
      setEditando(true);
      const response = await Api.post("/editAssistido/", data);

      if (response.data.success && response.data.success === false){
        setEditando(false);
        return alert(response.data.message)
      }

      else if(response.data.success && response.data.success === true){
        setEditando(false);
        return alert(response.data.message)
      }
    }

    catch (error) {
      setEditando(false);
      return alert(`Ocorreu um erro ao editar o assistido. \n\n Código do erro: ${error.message}`)
    }

  };

  return { editarAssistido, editando };
};