import React, {useState} from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirUsuario } from '../../../Data/excluirUsuario';
import ButtonExcluir from "./Items";

export default function Usuarios({usuario}){

    const { excluirUsuario, excluindo, erro } = useExcluirUsuario();
    function handleDeleteUsuario(event, id) {
        event.preventDefault();
        const jsonId = {"id": id};
        console.log("selecionado o usuário de id", id)

        if (excluindo) {
            return <>{Loader()}</>
        }
        else if (erro) {
            return alert("Ocorreu um erro ao excluir o Usuário\n\n" + "Código do erro: " + erro.message);
        }
        else{
            excluirUsuario(jsonId);
        }
    }

    return(
        <>
            <form onSubmit={(event) => handleDeleteUsuario(event, usuario.id)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o Usuário <span className="font-semibold text-red">{usuario.name}</span>? Ao excluir o usuário você exclui todo o histórico de alterações do mesmo.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}