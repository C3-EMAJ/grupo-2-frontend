import React, { useState } from 'react';

// Imagens
import img_Login from '../../images/img_Login.png';
import ocultar from '../../images/ocultar.png'
import ver from '../../images/ver.png'

export default function PageLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 flex bg-white justify-center items-center">
      <div className="flex">
        <form className="flex flex-col space-y-4 items-center">
          <img src={img_Login} alt="EMAJ Image" />
          <div className="flex flex-col w-full px-2">
            <label className="text-xs">Email</label>
            <input type="email" name="email" id="email" className="border py-1 rounded" />
          </div>

          <div className="flex flex-col w-full px-2">
            <label className="text-xs">Senha</label>
            <div className="flex justify-between space-x-1.5 items-center">
              <input type={showPassword ? "text" : "password"} name="password" id="password" className="border py-1 w-full rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
              <img src={showPassword ? ocultar : ver} className="w-5 h-5 hover:scale-110 cursor-pointer" onClick={handlePasswordToggle} />
            </div>
          </div>

          <div className="flex flex-col items-center w-full px-2 space-y-2">
              <button type="submit" className="bg-orange text-white text-center font-semibold w-full rounded shadow-lg hover:scale-105 py-1 duration-75">
                Entrar
              </button>
            <button className="border-b w-1/2 text-high_grey text-xs hover:scale-105 py-1 duration-75">
              Esqueci minha senha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
