import React from "react";

import Sidebar from "../../Components/Sidebar";
import Tela from "../../Components/Tela";

function Assistidos ({ListName, BtnName}){
    return(
        <div>
            <div class="flex h-screen">
                <Sidebar />
                <Tela ListName={ListName} BtnName={BtnName}/>
            </div>
        </div>
    );
}

export default Assistidos;