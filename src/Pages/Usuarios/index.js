import React from "react";

import Sidebar from "../../Components/Sidebar";
import Tela from "../../Components/Tela";

export default function Usuarios (){
    return(
        <div>
            <div class="flex h-screen">
                <Sidebar />
                <Tela ListName="Lista Usuários" BtnName="Adicionar Usuário" page="Usuarios" />
            </div>
        </div>
    );
}