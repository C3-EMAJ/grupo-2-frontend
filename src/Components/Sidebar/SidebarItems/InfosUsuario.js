import React from "react";

export default function InfosUsuario ({foto, nome}){
    return( 
        <div class="my-10">
            <div class="flex justify-center items-center">
                <img src={foto} class="rounded-full scale-75" alt="foto do perfil"/>
            </div>
            <div class="my-3">
                <div class="text-center text-black font-semibold text-xs">
                    <a>{nome ? nome : "Nome do Usuário"}</a>
                </div>
            <div class="text-center text-orange font-medium text-xs">Aluno</div>
            </div>
        </div>
    );
}