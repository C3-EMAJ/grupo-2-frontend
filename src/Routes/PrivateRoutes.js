import React from "react";

//Autenticação
import { autenticado } from "../Utils/validadores";

//Páginas
import PageLogin from "../Pages/Login";

export const ProtectedRoutes = ({children}) => {
    //console.log(autenticado())
    return autenticado() ? children : <PageLogin />
}