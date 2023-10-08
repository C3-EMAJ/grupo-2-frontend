import React from "react";
import Sidebar from "../../Components/Sidebar"
import Header from "../../Components/HeaderAddUser";

function AdicionarUsuario (){
    return (
        <div>
            <Sidebar />
            <div class="ml-48 rounded-lg h-screen overflow-y-auto">
                <Header />
                <div class="m-3 bg-low_grey rounded-lg h-screen">
                    <div class="flex justify-between  pt-3 px-5">
                        <h1 class="font-bold text-2xl">Lista de Usuários</h1>
                        <a href="#" class="bg-orange text-white hover:text-black rounded-md w-44 text-center">
                            <h1 class="my-1 text-sm">Adicionar Usuário</h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdicionarUsuario;


          <div class="flex justify-between">
            <div class="">
              <a href="#" class="">
                <img></img>
              </a>
            </div>
            <div class="w-1/5 text-black text-sm hover:text-high_grey border-2 border-high_grey rounded-lg">
              <a href="#" class="ml-2">Buscar...</a>
            </div>
            <div class="">
              <a href="#" class="">
                <img></img>
              </a>
            </div>
          </div>