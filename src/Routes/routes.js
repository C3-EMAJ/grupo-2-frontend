import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Proteção das rotas
import { Private } from "./rotasPrivadas.js";

//Páginas
import PageLogin from '../Pages/Login';
import Demandas from '../Pages/Demandas';
import Usuarios from '../Pages/Usuarios';
import Assistidos from '../Pages/Assistidos';
import Agendamentos from '../Pages/Agendamentos';
import Configuracoes from '../Pages/Configurações';

const Routering = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/demandas" element={<Private> {<Demandas />} </Private>} />
            <Route path="/usuarios" element={<Private> {<Usuarios />} </Private>} />
            <Route path="/assistidos" element={<Private> {<Assistidos />} </Private>} />
            <Route path="/agendamentos" element={<Private> {<Agendamentos />} </Private>} />
            <Route path="/configuracoes" element={<Private> {<Configuracoes />} </Private>} />
        </Routes>
    </Router>
  );
}

export default Routering;
