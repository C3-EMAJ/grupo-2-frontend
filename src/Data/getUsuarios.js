import { useState, useEffect } from "react";
import geralFetch from "./config";

// Criar um hook personalizado para buscar todos os Usuarios
export const useUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await geralFetch.get(
          "/users"
        );

        const data = response.data;

        setListaUsuarios(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { listaUsuarios, loading };
};