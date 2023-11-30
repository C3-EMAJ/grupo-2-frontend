import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAssistidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState ();

  useEffect(() => {
    async function fetchData() {
    
      try{
        setLoading(true)
        setResponse(await Api.get("/getAssistido/"));
        console.log(response)

        setLoading(false);
        setListaAssistidos(response.data);
        
      }

      catch(error){
        setLoading(false);
        return alert(response.data.message)
      }
    }
  
    fetchData();
  }, []);

  return { listaAssistidos, loading };
};