import { useState, useEffect } from "react";
import geralFetch from "./config";

// Criar um hook personalizado para buscar todos os assistidos
export const useAssistidos = () => {
  const [listaAssistidos, setListaAsstidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await geralFetch.get(
          "/users"
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