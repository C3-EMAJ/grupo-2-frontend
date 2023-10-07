import React from "react";
import Sidebar from "../../Components/Sidebar"
import Header from "./Items/Header";

function AdicionarUsuario (){
    return (
        <div>
            <Sidebar />
            <div class="ml-48 border-2 border-dashed rounded-lg h-screen overflow-y-auto">
                <Header />
                <div class="m-3 bg-low_grey rounded-lg h-screen">
                    <h1 class="font-bold p-3 text-2xl">Lista de Usuários</h1>
                </div>
            </div>
        </div>
    );
}

export default AdicionarUsuario;