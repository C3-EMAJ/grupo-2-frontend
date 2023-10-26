import React from "react";

import Tela from "../Components/Tela";

export default function Usuarios (){
    return(
        <div class="flex h-screen">
            <Tela ListName="Lista Usuários" BtnName="Adicionar Usuário" page="Usuarios" />
        </div>
    );
}