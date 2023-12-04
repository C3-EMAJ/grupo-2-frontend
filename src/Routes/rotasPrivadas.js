import React from "react";

//Autenticação
import { autenticado } from "../Utils/validadores";

//Páginas
import PageLogin from "../Pages/Login";

export const Private = ({children}) => {
    //console.log(autenticado())
    return autenticado() ? children : <PageLogin />
}