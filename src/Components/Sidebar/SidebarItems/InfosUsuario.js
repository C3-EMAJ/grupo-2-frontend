import React from "react";

export default function InfosUsuario ({foto, nome}){
    return( 
        <div className="my-10">
            <div className="flex justify-center items-center">
                <img src={foto} class="rounded-full scale-75" alt="foto do perfil"/>
            </div>
            <div className="my-3">
                <div className="text-center text-black font-semibold text-xs">
                    <a>{nome ? nome : "Nome do Usuário"}</a>
                </div>
            <div className="text-center text-orange font-medium text-xs">Aluno</div>
            </div>
        </div>
    );
}