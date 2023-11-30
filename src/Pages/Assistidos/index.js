import React from "react";

//Components
import Tela from "../../Components/Tela";
import Sidebar from "../../Components/Sidebar";

export default function Assistidos (){
    return(
        <div class="flex h-full h-screen w-full">
            <Sidebar />
            <Tela ListName="Lista Assistidos" BtnName="Adicionar Assistido" page="Assistidos"/>
        </div>
    );
}