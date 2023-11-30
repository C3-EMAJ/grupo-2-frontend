import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Imagens
import img_Login from '../../images/img_Login.png';
import ocultar from '../../images/ocultar.png';
import ver from '../../images/ver.png';

//Components
import Loader from '../../Components/Loader';

//Hooks de login
import { useLogin } from '../../Services/login';

//Validadores
import { autenticado, validarEmailFurg, validarData } from '../../Utils/validadores';


export default function PageLogin() {

  const {login, loading} = useLogin();
  const navigate = useNavigate();

  //const para setar a senha como visível ou não
  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {email, password}

    //dados que são obrigatórios o preenchimento
    const required = ['email', 'password']
    
    //Valiação dos dados antes de efetuar o login
    if (validarData(data, required) === false){
      return alert("O e-mail e a senha devem ser preenchidos!")
    }
    else{
      if (validarEmailFurg(data.email) === true) {
        await login(data)
        autenticado() === true ? navigate("/demandas") : navigate("/")
      }
    }
  }

  return (
    <div className="fixed inset-0 flex bg-white justify-center items-center">
      
      {/* Definindo quando o loader é exibido */}
      {loading === true ? <Loader /> : null}
      
      <div className="flex">

        <form onSubmit={(e) => {handleSubmit(e)}} className="flex flex-col space-y-4 items-center">

          <img src={img_Login} alt="" />

          <div className="flex flex-col w-full px-2">
            <label className="text-xs">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border py-1 rounded" />
          </div>

          <div className="flex flex-col w-full px-2">
            <label className="text-xs">Senha</label>
            <div className="flex justify-between space-x-1.5 items-center">
              <input type={showPassword ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border py-1 w-full rounded" />
              <img src={showPassword ? ver : ocultar} alt="" className="w-5 h-5 hover:scale-110 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
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