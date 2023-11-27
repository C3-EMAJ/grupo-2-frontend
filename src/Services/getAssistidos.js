import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAsstidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.get("/users");

        const data = response.data;

        setListaAsstidos(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(`Ocorreu um erro ao carregar a lista de Assistidos\n\n Código do erro: ${error.message}`);
      }
    }

    fetchData();
  }, []);

  return { listaAssistidos, loading };
};