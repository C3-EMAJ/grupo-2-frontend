import React from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirDemanda } from '../../../Services/excluirDemanda';
import ButtonExcluir from "./Items";

//Validadores
import { validarProfessor } from "../../../Utils/validadores";

export default function Demandas({demanda}){
    
    const { excluirDemanda, excluindo } = useExcluirDemanda();
    
    //função para chamar a requisição de excluir usuário
    const handleDeleteDemanda = async (e, id_uuid) =>  {
        e.preventDefault();

        if (!validarProfessor(localStorage.getItem("role"))) {
            return
        }

        const data = {id_uuid};
        //console.log(data)

        await excluirDemanda(data);
        window.location.reload();
    }

    return (
        <>
            {excluindo ? <Loader /> : null}
            <form onSubmit={(e) => handleDeleteDemanda(e, demanda.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir a demanda <span className="font-semibold text-red">{demanda.titulo}</span>? Ao excluir a demanda você exclui todos os dados referentes à ela.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}