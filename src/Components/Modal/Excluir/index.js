import React from 'react';

function deleteAssistido(cpf) {
    //const jsonId = {
    //  "cpf": cpf
    //}
    console.log("foi excluído o assistido de id", cpf)
    //fetch("http://127.0.0.1:8000/deleteAssistido/", {
    //  method:"POST",
    //  body: JSON.stringify(jsonId),
    //  headers: {'Content-Type':'application/json'}
    //})
}

function ButtonExcluir(cpf) {
    return (
        <button className="bg-red text-white text-sm font-semibold rounded hover:scale-105 w-16 h-8" onClick={() => deleteAssistido(cpf)}>
            Excluir
        </button>
    );
}

function modalswitch(page, assistido, usuario) {
    

    if (page === "Usuarios") {
        return (
            // Renderize informações do usuário aqui
            null
        );
    } else if (page === "Assistidos") {
        return (
            <div className="flex flex-col">
                <p className="text-sm">
                    Você realmente deseja excluir o assistido <span className="font-semibold text-red">{assistido.nome}</span>? Ao excluir o assistido você exclui todos os processos vinculados a ele.
                </p>
                <div className="flex justify-end">
                    <ButtonExcluir cpf={assistido.cpf} />
                </div>
            </div>
        );
    }
}

function qualPag(page) {
    const tituloModal = "pb-3 text-xl font-semibold";
    if (page === "Assistidos") {
        return <h1 className={tituloModal}>Excluir Assistido</h1>;
    } else if (page === "Usuarios") {
        return <h1 className={tituloModal}>Excluir Usuário</h1>;
    }
}

export default function ModalExcluir({ isOpen, isClose, page, assistido, usuario }) {
    if (isOpen) {
        return (
            <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                <div className="bg-white w-96 h-40 rounded shadow-2xl z-40 p-2">
                    <div className="flex justify-between pb-3">
                        {qualPag(page)}
                        <button className="bg-red text-white text-sm font-bold w-5 h-5 hover:scale-110 duration-75 rounded" onClick={isClose}>X</button>
                    </div>
                    {modalswitch(page, assistido, usuario)}
                </div>
            </div>
        );
    }
    return null;
}