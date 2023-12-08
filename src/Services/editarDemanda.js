import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useEditarDemanda = () => {
  const [editando, setEditando] = useState(false);

  const editarDemanda = async (data) => {

    try {
      setEditando(true);
      const response = await Api.post("/editDemanda/", data);

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
      return alert(`Ocorreu um erro ao editar a demanda. \n\n Código do erro: ${error.message}`)
    }

  };

  return { editarDemanda, editando };
};