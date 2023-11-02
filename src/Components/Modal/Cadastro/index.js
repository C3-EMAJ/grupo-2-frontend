import React from 'react';
import Usuarios from './Usuarios';
import Assistidos from './Assistidos';

function modalswitch(page){
    if (page === "Usuarios"){
        return <Usuarios />
    }
    else if (page === "Assistidos"){
        return <Assistidos />
    }
}

const tituloModal = "pb-3 text-2xl font-semibold"

function qualPag(page){
    if (page === "Assistidos"){
        return <h1 className={tituloModal}>Cadastrar Assistido</h1>
    }
    else if (page === "Usuarios"){
        return <h1 className={tituloModal}>Cadastrar Usuário</h1>
    }
}

export default function Modal({isOpen, isClose, page}) {
    if(isOpen){
        return (
            <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                <div className="bg-white w-1/2 max-h-full overflow-y-auto rounded-lg shadow-2xl z-40">
                    <div className="flex justify-between pt-4 px-16 ">
                    {qualPag(page)}
                        <button className="bg-orange text-white font-black w-7 h-7 hover:scale-110 duration-75 rounded" onClick={isClose} >X</button>
                    </div>
                    {modalswitch(page)}
                </div>
            </div>
        );
    }
    return null;
}