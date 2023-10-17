import React from 'react';
import Usuario from './Usuario';
import Assistidos from './Assistidos';

function modalswitch(page){
    if (page == "Usuarios"){
        return(
            <Usuario />
        );
    }
    return(
        <Assistidos />
    )
}

function Modal({isOpen, isClose, page}) {
    if(isOpen){
            return (
            <div>
                <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                    <div className="bg-white overflow-y-auto w-2/4 h-5/6 rounded-lg shadow-2xl z-40">
                        <div class="flex justify-end items-end pt-4 pr-4">
                            <button className="bg-orange text-white font-black w-7 h-7 hover:scale-125 rounded" onClick={isClose} >X</button>
                        </div>
                        {modalswitch(page)}
                    </div>
                </div>
            </div>
            ); 
        }
    return null;
}

export default Modal;