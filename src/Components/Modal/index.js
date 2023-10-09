import React from 'react';

function Modal({isOpen}) {
    if(isOpen){
        return (
        <div>
            <div class="fixed h-full w-full z-1000 bg-[rgb(0,0,0,0.1)] backdrop-blur-sm">
                <div class="">
                    modal
                </div>
            </div>
        </div>
        );
    }

    return null;
}

export default Modal;