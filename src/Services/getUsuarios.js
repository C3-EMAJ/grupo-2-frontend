import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os Usuarios
export const useUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.get("/getUser");

        const data = response.data;

        setListaUsuarios(data);
        setLoading(false);
      } 
      catch (error) {
        setLoading(false);
        alert(`Ocorreu um erro ao carregar a lista de Usuários\n\n Código do erro: ${error.message}`);
      }
    }

    fetchData();
  }, []);

  return { listaUsuarios, loading };
};