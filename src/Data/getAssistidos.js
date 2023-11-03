import { useState, useEffect } from "react";
import axios from "axios";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAsstidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = response.data;

        setListaAsstidos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { listaAssistidos, loading };
};