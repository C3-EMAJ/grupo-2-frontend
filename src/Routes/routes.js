import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Proteção das rotas
import ProtectedRoutes from './ProtectedRoutes';

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
            <Route path="/demandas" element={<ProtectedRoutes> <Demandas /> </ProtectedRoutes>} />
            <Route path="/usuarios" element={<ProtectedRoutes> <Usuarios /> </ProtectedRoutes>} />
            <Route path="/assistidos" element={<ProtectedRoutes> <Assistidos /> </ProtectedRoutes>} />
            <Route path="/agendamentos" element={<ProtectedRoutes> <Agendamentos /> </ProtectedRoutes>} />
            <Route path="/configuracoes" element={<ProtectedRoutes> <Configuracoes /> </ProtectedRoutes>} />
        </Routes>
    </Router>
  );
}

export default Routering;
