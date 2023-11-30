import { useState } from "react";

//BaseURL da API
import Api from "./config";

export const useCadastrarAssistido = () => {
  const [cadastrando, setCadastrando] = useState(false);
  const [response, setResponse] = useState();

  const cadastrarAssistido = async (data) => {
    try {
      setCadastrando(true);

      setResponse(await Api.post("/assistido", data));
      setCadastrando(false);
      return response.data.success === true ? alert(response.data.message) : null
    }

    catch (error) {
      setCadastrando(false);
      return response.data.success === false ? alert(response.data.message) : null
    }
  };

  return { cadastrarAssistido, cadastrando };
};