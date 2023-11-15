import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <Route path="*" element={<PageLogin />} />
            <Route path="/demandas" element={<Demandas />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/assistidos" element={<Assistidos />} />
            <Route path="/agendamentos" element={<Agendamentos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
    </Router>
  );
}

export default Routering;