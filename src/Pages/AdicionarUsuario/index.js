import React from "react";
import Sidebar from "../../Components/Sidebar"
import Tela from "../../Components/Tela";

function AdicionarUsuario (){
    return (
        <div>
            <Sidebar />
            <Tela ListName="Lista Usuários" BtnName="Adicionar Usuário"/>
        </div>
    );
}

export default AdicionarUsuario;