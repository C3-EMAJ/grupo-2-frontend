import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os Usuarios
export const useUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      
      try{
        setLoading(true)
        const response = await Api.get("/getUser");
        
        if (response.data.success && response.data.success === false){
          setLoading(false);
          return response.data.success === false ? alert(response.data.message) : null
        }
        
        else{
          setLoading(false);
          setListaUsuarios(response.data);
        }
      }

      catch(error){
        alert(`Ocorreu um erro ao carregar a lista de usuários. \n\n Código do erro: ${error.message}`)
      }
    }

    fetchData();
  }, []);

  return { listaUsuarios, loading };
};