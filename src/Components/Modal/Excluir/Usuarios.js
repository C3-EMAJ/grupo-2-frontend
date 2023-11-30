import React from "react";
import { useNavigate } from 'react-router-dom';

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirUsuario } from '../../../Services/excluirUsuario';
import ButtonExcluir from "./Items";

export default function Usuarios({usuario}){
    
    const { excluirUsuario, excluindo } = useExcluirUsuario();
    
    //função para chamar a requisição de excluir usuário
    const handleDeleteUsuario = async (e, id_uuid) =>  {
        e.preventDefault();

        const data = {"id_uuid": id_uuid};
        //console.log("selecionado o usuário de id", id_uuid, " e nome: ", usuario.name)

        await excluirUsuario(data);
        window.location.reload();
    }

    return (
        <>
            {excluindo === true ? <Loader /> : null}
            <form onSubmit={(e) => handleDeleteUsuario(e, usuario.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o Usuário <span className="font-semibold text-red">{usuario.name}</span>? Ao excluir o usuário você exclui todo o histórico de alterações do mesmo.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}