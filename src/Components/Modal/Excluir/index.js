import React from 'react';

//Componentes
import Assistidos from './Assistidos';
import Usuarios from './Usuarios';

//função para definir o título do modal
function qualPag(page) {

    const tituloModal = "pb-3 text-xl font-semibold";

    if (page === "Assistidos") {
        return <h1 className={tituloModal}>Excluir Assistido</h1>;
    } else if (page === "Usuarios") {
        return <h1 className={tituloModal}>Excluir Usuário</h1>;
    }
}

//função para exibir ou o modal de assistidos ou de usuários
function modalswitch(page, usuario, assistido) {

    if (page === "Usuarios" && usuario && usuario.name) {
        return <Usuarios usuario={usuario}/>
    }

    else if (page === "Assistidos" && assistido && assistido.name) {
        return <Assistidos assistido={assistido}/>
    }
}

export default function ModalExcluir({ isOpen, isClose, page, usuario, assistido }) {
    if (isOpen) {
        
        return (
            <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                <div className="bg-white w-96 h-40 rounded shadow-2xl z-40 p-2">
                    <div className="flex justify-between pb-3">
                        {qualPag(page)}
                        <button className="bg-red text-white text-sm font-bold w-5 h-5 hover:scale-110 duration-75 rounded" onClick={isClose}>X</button>
                    </div>
                    {modalswitch(page, usuario, assistido)}
                </div>
            </div>
        );
    }
}