import React from 'react';

//Components
import Usuarios from './Usuarios';
import Assistidos from './Assistidos';
import { BgBlur } from '../../BgBlur';

//Função do modal, onde são renderizados os componentes de acordo com a página em que o usuário sem encontra
export default function Modal({isOpen, isClose, page, usuario, assistido}) {
    
    //Função que retorna o modal de cadastro de acordo com a página em que o usuário se encontra (pagina de usuários ou assistidos)
    function modalswitch(){
        if (page === "Usuarios"){
            return <Usuarios usuario={usuario}/>
        }
        else if (page === "Assistidos"){
            return <Assistidos assistido={assistido}/>
        }
    }
    
    const tituloModal = "pb-3 text-2xl font-semibold"
    
    //Função para definir qual o título do modal de acordo com a página em que o usuário sem encontra
    function qualPag(){
        if (page === "Assistidos"){
            if (assistido) {
                return <h1 className={tituloModal}>Editar Assistido</h1>
            }
            return <h1 className={tituloModal}>Cadastrar Assistido</h1>
        }
        else if (page === "Usuarios"){
            if (usuario) {
                return <h1 className={tituloModal}>Editar Usuário</h1>
            }
            return <h1 className={tituloModal}>Cadastrar Usuário</h1>
        }
    }

    //Código do modal
    if(isOpen){
        return (
            <BgBlur> {
                <div className="bg-white w-1/2 max-h-full overflow-y-auto rounded-md shadow-2xl z-40">
                    <div className="flex justify-between pt-4 px-16 ">
                    {qualPag()}
                        <button className="bg-orange text-white font-black w-7 h-7 hover:scale-110 duration-75 rounded" onClick={isClose} >X</button>
                    </div>
                    {modalswitch()}
                </div>
            } </BgBlur>
            
        );
    }
}