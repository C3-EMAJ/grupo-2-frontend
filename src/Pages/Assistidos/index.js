import React from "react";
import { useState } from "react";

import Sidebar from "../../Components/Sidebar";
//import Tela from "../../Components/Tela";
import Header from '../../Components/Header';
import Modal from '../../Components/Modal';

function Assistidos ({ListName, BtnName}){
    const [openModal, setOpenModal] = useState(false);
    
    return(
        <div>
            <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)} />
            <div class="flex h-screen">
                <Sidebar />
                <div class="rounded-lg w-full overflow-y-auto">
                    <Header />
                    <div class="m-3 h-screen bg-low_grey rounded-lg">
                        <div class="flex justify-between p-3 mx-4 border-b border-high_grey">
                            <h1 class="font-bold text-2xl">{ListName}</h1>
                            <button onClick={() => setOpenModal(true)} class="bg-orange text-white hover:text-black rounded-md w-40 text-center text-sm">{BtnName}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Assistidos;