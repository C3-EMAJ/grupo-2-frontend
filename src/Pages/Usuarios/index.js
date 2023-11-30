import React from "react";

//Components
import Tela from "../../Components/Tela";
import Sidebar from "../../Components/Sidebar";

export default function Usuarios (){
    return(
        <div class="flex h-full border-2 w-full">
            <Sidebar />
            <Tela ListName="Lista Usuários" BtnName="Adicionar Usuário" page="Usuarios" />
        </div>
    );
}