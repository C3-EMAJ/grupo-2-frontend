import React from "react";

//Autenticação
import { autenticado } from "../Utils/validadores";

//Páginas
import PageLogin from "../Pages/Login";

const ProtectedRoutes = ({children}) => {
    //console.log(autenticado())
    return autenticado() ? children : <PageLogin />
}

export default ProtectedRoutes;