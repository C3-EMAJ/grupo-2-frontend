import { useState, useEffect } from "react";

//BaseURL da API
import Api from "./config";

// Criar um hook personalizado para buscar todos os Usuarios
export const useUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const[response, setResponse] = useState();

  useEffect(() => {
    async function fetchData() {

      try {
        setResponse(await Api.get("/getUser"));

        setLoading(false);
        return response.data.success === true ? setListaUsuarios(response.data) : null
      }

      catch (error) {
        setLoading(false);
        return response.data.success === false ? alert(response.data.message) : null
      }
    }

    fetchData();
  }, []);

  return { listaUsuarios, loading };
};