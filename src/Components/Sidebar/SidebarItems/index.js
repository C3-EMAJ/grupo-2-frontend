import React from "react";
import { Link } from "react-router-dom";

import foto_perfil from '../../../images/foto.png';

function Button ({route, img, text}){
    return(
        <div>
            <li>
                <Link to={route} className="flex items-center p-1 text-xs text-black rounded hover:bg-orange group">
                    <img src={img}></img>
                    <span className="ml-1.5">{text}</span>
                </Link>
            </li>
        </div>
    );
}

function InfosUsuario ({foto, nome, funcao}){
    return( 
        <div className="my-10">
            <div className="flex justify-center items-center">
                <img src={foto ? foto : foto_perfil} class="rounded-full scale-75" alt="foto do perfil"/>
            </div>
            <div className="my-3">
                <div className="text-center text-black font-semibold text-xs">
                    <a>{nome && nome !== undefined ? nome : "Nome do Usuário"}</a>
                </div>
                <div className="text-center text-orange font-medium text-xs">
                    <a>{funcao && funcao !== undefined ? funcao : "Função"}</a>
                </div>
            </div>
        </div>
    );
}

export {Button, InfosUsuario}