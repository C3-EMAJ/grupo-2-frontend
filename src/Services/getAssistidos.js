import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAssistidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
    
      try{
        setLoading(true)
        const response = await Api.get("/getAssistido/");
        console.log(response)
        if (response.data.success && response.data.success === false){
          setLoading(false);
          alert(response.data.message)
          return
        }
        
        else{
          setLoading(false);
          setListaAssistidos(response.data);
        }
      }

      catch(error){
        setLoading(false);
        alert(`Ocorreu um erro ao carregar a lista de assistidos. \n\n Código do erro: ${error.message}`)
      }
    }
  
    fetchData();
  }, []);

  return { listaAssistidos, loading };
};