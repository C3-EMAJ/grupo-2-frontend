import React from "react";

import Sidebar from "../../Components/Sidebar";
import Tela from "../../Components/Tela";

function Assistidos (){
    return(
        <div>
            <div class="flex h-screen">
                <Sidebar />
                <Tela ListName="Lista Assistidos" BtnName="Adicionar Assistido" page="Assistidos"/>
            </div>
        </div>
    );
}

export default Assistidos;