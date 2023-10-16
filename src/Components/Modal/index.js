import React from 'react';
import Usuario from './Usuario';
import Assistidos from './Assistidos';

function Modal({isOpen, isClose, page}) {
    if(isOpen){
        if (page == "Usuarios"){
            return (
            <div>
                <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                    <div className="bg-white overflow-y-auto w-2/4 h-5/6 rounded-lg shadow-2xl z-40">
                        <div class="flex justify-end items-end pt-4 pr-4">
                            <button className="bg-orange text-white font-black w-7 h-7 hover:scale-125 rounded" onClick={isClose} >X</button>
                        </div>
                        <Usuario />
                    </div>
                </div>
            </div>
            );
        };
        if (page == "Assistidos"){
            return (
            <div>
                <div className="fixed inset-0 flex bg-[rgba(0,0,0,0.1)] backdrop-blur-sm items-center justify-center">
                    <div className="bg-white overflow-y-auto w-2/4 h-5/6 rounded-lg shadow-2xl z-40">
                        <div class="flex justify-end items-end pt-4 pr-4">
                            <button className="bg-orange text-white font-black w-7 h-7 hover:scale-125 rounded" onClick={isClose} >X</button>
                        </div>
                        <Assistidos />
                    </div>
                </div>
            </div>
            );
        };
    }
    return null;
}

export default Modal;