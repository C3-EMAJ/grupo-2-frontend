import React from "react";
import Sidebar from "../../Components/Sidebar";
import Tela from "../../Components/Tela"

function Demandas (){
    return (
        <div className="flex">
            <Sidebar />
            <Tela ListName="Lista Demandas" BtnName="Adicionar Demanda" page="Demandas"/>
        </div>
    );
}

export default Demandas;