import React from 'react';
import { useState } from "react";

//Componentes
import Header from '../Header';
import Modal from '../Modal/Cadastro';
import { CardUsuario, CardAssistido } from '../Card';

export default function Tela({ListName, BtnName, page}) {
    
    function CardSwitch(page, search){
        if (page === "Usuarios"){
          return <CardUsuario />;
        }
        return <CardAssistido search={search} />;
      }
    
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState(""); // Estado para a pesquisa
    console.log("teste na tela",search)
    return (
        <div className="rounded-lg w-full overflow-y-auto">
            <Header search={search} setSearch={setSearch}/>
            <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)} page={page} />
            <div className="mx-1.5 bg-medium_grey h-full rounded-lg">
                <div className="flex justify-between p-3 mx-4 border-b border-black">
                    <h1 className="font-bold text-2xl">{ListName}</h1>
                    <button onClick={() => setOpenModal(true)} className="bg-orange text-white hover:scale-105 duration-75 font-semibold rounded-md w-40 text-center text-sm">{BtnName}</button>
                </div>
                {CardSwitch(page, search)}
            </div>
        </div>
  );
}