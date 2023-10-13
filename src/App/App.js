import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Demandas from '../Pages/Demandas';
import Usuarios from '../Pages/Usuarios';
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
          <Route path="/AdicionarUsuario" element={<Usuarios />} />
          <Route path="/Assistidos" element={<Assistidos />} />
          <Route path="/Agendamentos" element={<Agendamentos />} />
          <Route path="/Configuracoes" element={<Configuracoes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;