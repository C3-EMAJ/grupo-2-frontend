import React from 'react';
import { useState } from "react";

import Header from '../Header';
import Modal from '../Modal';
import { CardUsuario, CardAssistido } from '../Card';

function CardSwitch(page){
    if (page == "Usuarios"){
        return(
            <CardUsuario />
        );
    }
    return(
        <CardAssistido />
    )
}

export default function Tela({ListName, BtnName, page}) {
    
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <div class="rounded-lg w-full overflow-y-auto">
            <Header />
            <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)} page={page} />
            <div class="mx-1.5 bg-medium_grey h-full rounded-lg">
                <div class="flex justify-between p-3 mx-4 border-b border-black">
                    <h1 class="font-bold text-2xl">{ListName}</h1>
                    <button onClick={() => setOpenModal(true)} class="bg-orange text-white hover:scale-105 duration-75 font-semibold rounded-md w-40 text-center text-sm">{BtnName}</button>
                </div>
                {CardSwitch(page)}
            </div>
        </div>
  );
}