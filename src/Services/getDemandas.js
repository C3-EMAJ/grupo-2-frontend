import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os Usuarios
export const useDemandas = () => {
  const [listaDemandas, setListaDemandas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      
      try{
        setLoading(true)
        const response = await Api.get("/getDemanda/");
        
        if (response.data.success && response.data.success === false){
          setLoading(false);
          return alert(response.data.message)
        }

        else{
          setLoading(false);
          setListaDemandas(response.data);
        }
      }

      catch(error){
        setLoading(false);
        alert(`Ocorreu um erro ao carregar a lista de demandas. \n\n Código do erro: ${error.message}`)
      }
    }

    fetchData();
  }, []);

  return { listaDemandas, loading };
};