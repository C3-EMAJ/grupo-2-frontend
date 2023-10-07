import React from "react";

function InfosUsuario ({foto, nome}){
    return(
        <div>
            <div class="my-10">
                <div class="flex justify-center items-center">
                    <img src={foto} class="rounded-full" alt="foto do perfil"/>
                </div>
                <div class="my-3">
                <div class="mx-auto text-center text-black font-semibold text-sm">
                    <a>{nome ? nome : "Nome do Usuário"}</a>
                </div>
                <div class="mx-auto text-center text-orange font-medium text-sm">
                    <a>Aluno</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default InfosUsuario;