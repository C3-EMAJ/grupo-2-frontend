import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Demandas from '../Pages/Demandas';
import AdicionarUsuario from '../Pages/AdicionarUsuario';
import Assistidos from '../Pages/Assistidos';
import Agendamentos from '../Pages/Agendamentos';
import Configuracoes from '../Pages/Configurações';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demandas />} />
          <Route path="/AdicionarUsuario" element={<AdicionarUsuario ListName='Lista Usuários' BtnName='Adicionar Usuário'/>} />
          <Route path="/Assistidos" element={<Assistidos ListName='Lista Assistidos' BtnName='Adicionar Assistido' />} />
          <Route path="/Agendamentos" element={<Agendamentos />} />
          <Route path="/Configuracoes" element={<Configuracoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;