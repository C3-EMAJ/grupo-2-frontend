import React from "react";

//Components
import Tela from "../../Components/Tela";
import Sidebar from "../../Components/Sidebar";

export default function Assistidos (){
    return(
        <div class="flex">
            <Sidebar />
            <Tela ListName="Lista Assistidos" BtnName="Adicionar Assistido" page="Assistidos"/>
        </div>
    );
}