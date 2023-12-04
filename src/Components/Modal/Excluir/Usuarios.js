import React from "react";

//Componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirUsuario } from '../../../Services/excluirUsuario';
import ButtonExcluir from "./Items";

//Validadores
import { validarProfessor } from "../../../Utils/validadores";

export default function Usuarios({usuario}){
    
    const { excluirUsuario, excluindo } = useExcluirUsuario();
    
    //função para chamar a requisição de excluir usuário
    const handleDeleteUsuario = async (e, id_uuid) =>  {
        e.preventDefault();

        if (!validarProfessor(localStorage.getItem("role"))) {
            return
        }

        const data = {id_uuid};
        //console.log(data)

        await excluirUsuario(data);
        window.location.reload();
    }

    return (
        <>
            {excluindo ? <Loader /> : null}
            <form onSubmit={(e) => handleDeleteUsuario(e, usuario.id_uuid)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o Usuário <span className="font-semibold text-red">{usuario.name}</span>? Ao excluir o usuário você exclui todo o histórico de alterações do mesmo.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}