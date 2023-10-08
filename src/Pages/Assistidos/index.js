import React from "react";
import Sidebar from "../../Components/Sidebar"
import Tela from "../../Components/Tela";

function Assistidos (){
    return (
        <div>
            <Sidebar />
            <Tela ListName="Lista Assistidos" BtnName="Adicionar Assistido"/>
        </div>
    );
}

export default Assistidos;