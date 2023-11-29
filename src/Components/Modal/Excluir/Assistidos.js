import React from "react";
import { useNavigate } from 'react-router-dom';

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirAssistido } from "../../../Services/excluirAssistido";
import ButtonExcluir from "./Items";

export default function Assistidos ({assistido}){
    
    const navigate = useNavigate();
    //console.log(assistido)
    const { excluirAssistido, excluindo } = useExcluirAssistido();
    
    //const para exibir o loader
    const loader = () => {
        if (excluindo) {
          return <Loader />;
        }
      };
    
    //função para chamar a requisição de excluir assistido
    const handleDeleteAssistido = async (e, id_uuid) => {
        e.preventDefault();

        const data = {"id_uuid": id_uuid};
        //console.log("selecionado o assistido de id: ", id_uuid, " e nome: ", assistido.name)
        
        await excluirAssistido(data);
        navigate("/assistidos")
    }

    return (
        <>
            {loader()}
            <form onSubmit={(e) => handleDeleteAssistido(e, assistido.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o assistido <span className="font-semibold text-red">{assistido.name}</span>? Ao excluir o assistido você exclui todos os processos vinculados a ele.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}