import React from "react";
import { useState } from "react";

import Header from '../Header';
import Modal from '../Modal';

function Tela ({ListName, BtnName}){
    const [openModal, setOpenModal] = useState(false);


    return(
        <div>
            <div class="ml-48 rounded-lg h-screen overflow-y-auto">
                <Header />
                <div class="m-3 bg-low_grey rounded-lg h-screen">
                    <div class="flex justify-between p-3 mx-4 border-b border-high_grey">
                        <h1 class="font-bold text-2xl">{ListName}</h1>
                        <a href="#" class="bg-orange text-white hover:text-black rounded-md w-44 text-center">
                            <button onClick={() => setOpenModal(true)} class="my-1 text-sm">{BtnName}</button>
                        </a>
                    </div>
                </div>
            <Modal isOpen={openModal} />
            </div>
        </div>
    );
}

export default Tela;