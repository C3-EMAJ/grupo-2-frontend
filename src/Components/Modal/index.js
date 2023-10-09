import React from 'react';

function Modal({isOpen, isClose}) {
    if(isOpen){
        return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"></div>
                    <div className="bg-white p-4 rounded-lg shadow-md z-10">
                        <h2 className="text-xl font-semibold mb-4">Modal</h2>
                        <p>conteúdo do modal</p>
                        <button className="bg-red text-white px-4 py-2 mt-4 rounded hover:border-black" onClick={isClose} > Fechar Modal </button>
                    </div>
            </div>
        </div>
        );
    }

    return null;
}

export default Modal;