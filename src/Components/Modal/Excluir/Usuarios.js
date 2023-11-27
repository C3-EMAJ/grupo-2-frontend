import React from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirUsuario } from '../../../Services/excluirUsuario';
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

        const data = {"id_uuid": id};
        console.log("selecionado o usuário de id", id, " e nome: ", usuario.name)

        excluirUsuario(data);
    }

    return (
        <>
            {loader()}
            <form onSubmit={(e) => handleDeleteUsuario(e, usuario.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o Usuário <span className="font-semibold text-red">{usuario.name}</span>? Ao excluir o usuário você exclui todo o histórico de alterações do mesmo.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}