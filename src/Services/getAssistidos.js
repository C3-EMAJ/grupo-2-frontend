import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAsstidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const[response, setResponse] = useState();

  useEffect(() => {
    async function fetchData() {

      try {
        setResponse(await Api.get("/getAssistido"));
        
        setLoading(false);
        return response.data.success === true ? setListaAsstidos(response.data) : null
      }

      catch (error) {
        setLoading(false);
        return response.data.success === false ? alert(response.data.message) : null
      }
    }

    fetchData();
  }, []);

  return { listaAssistidos, loading };
};