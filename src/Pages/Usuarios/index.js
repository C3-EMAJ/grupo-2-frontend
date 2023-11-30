import React from "react";

//Components
import Tela from "../../Components/Tela";
import Sidebar from "../../Components/Sidebar";

export default function Usuarios (){
    return(
        <div class="flex h-full h-screen overflow-y-auto">
            <Sidebar />
            <Tela ListName="Lista Usuários" BtnName="Adicionar Usuário" page="Usuarios" />
        </div>
    );
}