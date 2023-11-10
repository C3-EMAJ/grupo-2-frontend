import React, {useState} from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirUsuario } from '../../../Data/excluirUsuario';
import ButtonExcluir from "./Items";

export default function Usuarios({usuario}){
    //console.log(usuario)
    const { excluirUsuario, excluindo } = useExcluirUsuario();

    //const para exibir o loader
    const loader = () => {
        if (excluindo) {
          return <Loader />;
        }
      };
    
    //função para chamar a requisição de excluir usuário
    function handleDeleteUsuario(e, id) {
        e.preventDefault();

        const jsonId = {"id": id};
        console.log("selecionado o usuário de id", id, " e nome: ", usuario.name)

        excluirUsuario(jsonId);
    }

    return (
        <>
            {loader()}
            <form onSubmit={(e) => handleDeleteUsuario(e, usuario.id)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o Usuário <span className="font-semibold text-red">{usuario.name}</span>? Ao excluir o usuário você exclui todo o histórico de alterações do mesmo.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}