import React from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirAssistido } from "../../../Services/excluirAssistido";
import ButtonExcluir from "./Items";

//Validadores
import { validarProfessor } from "../../../Utils/validadores";

export default function Assistidos ({assistido}){
    
    const { excluirAssistido, excluindo } = useExcluirAssistido();
    
    //função para chamar a requisição de excluir assistido
    const handleDeleteAssistido = async (e, id_uuid) => {
        e.preventDefault();
        
        if (!validarProfessor(localStorage.getItem("role"))){
            return
        }

        const data = {id_uuid};
        //console.log(data)
        
        await excluirAssistido(data);
        window.location.reload();
    }

    return (
        <>
            {excluindo ? <Loader /> : null}
            <form onSubmit={(e) => handleDeleteAssistido(e, assistido.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o assistido <span className="font-semibold text-red">{assistido.name}</span>? Ao excluir o assistido você exclui todos os processos vinculados a ele.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}