import React, {useState} from "react";

//componentes
import Loader from "../../Loader";

//Hooks personalizados
import { useExcluirAssistido } from "../../../Data/excluirAssistido";
import ButtonExcluir from "./Items";

export default function Assistidos ({assistido}){
    console.log(assistido)
    const { excluirAssistido, excluindo, erro } = useExcluirAssistido();
    
    function handleDeleteAssistido(event, cpf) {
        
        event.preventDefault();
        const jsonId = {"cpf": cpf};
        console.log("selecionado o assistido de cpf", cpf)
    
        if (excluindo) {
            return <>{Loader()}</>
        }
        else if (erro) {
            return alert("Ocorreu um erro ao excluir o Assistido\n\n" + "Código do erro: " + erro.message);
        }
        else{
            excluirAssistido(jsonId);
        }
    }

    return (
        <>
            <form onSubmit={(event) => handleDeleteAssistido(event, assistido.cpf)} className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o assistido <span className="font-semibold text-red">{assistido.name}</span>? Ao excluir o assistido você exclui todos os processos vinculados a ele.
                </p>
                <ButtonExcluir />
            </form>
        </>
    );
}