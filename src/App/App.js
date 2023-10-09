import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Sidebar from '../Components/Sidebar';

import Processos from '../Pages/Processos';
import AdicionarUsuario from '../Pages/AdicionarUsuario';
import Assistidos from '../Pages/Assistidos';
import Agendamentos from '../Pages/Agendamentos';
import Pastas from '../Pages/Pastas';
import Configuracoes from '../Pages/Configurações';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Processos />} />
          <Route path="/AdicionarUsuario" element={<AdicionarUsuario ListName='Lista Usuários' BtnName='Adicionar Usuário'/>} />
          <Route path="/Assistidos" element={<Assistidos ListName='Lista Assistidos' BtnName='Adicionar Assistido' />} />
          <Route path="/Agendamentos" element={<Agendamentos />} />
          <Route path="/Pastas" element={<Pastas />} />
          <Route path="/Configuracoes" element={<Configuracoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;