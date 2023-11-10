import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, ImageUpload } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import {useCadastrarUsuario} from '../../../Data/cadastrarUsuario'


//Função contendo os componentes necessários para o cadastro de usuários
export default function Usuarios({ usuario }) {
  const { cadastrarUsuario, cadastrando } = useCadastrarUsuario();

  // Dados do Usuário
  const [name, setName] = useState(usuario ? usuario.name : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");
  const [username, setUsername] = useState(usuario ? usuario.username : "");
  const [password, setPassword] = useState(usuario ? usuario.password : "");
  const [confirmPassword, setConfirmPassword] = useState(usuario ? usuario.confirmPassword : "");
  const [funcao, setFuncao] = useState(usuario ? usuario.funcao : "");
  const [image, setImage] = useState(usuario ? usuario.image : "");

  function handleSubmit(event) {
    event.preventDefault();
    const data = { name, email, username, password, confirmPassword, funcao, image };

    // Dados do usuário verificados se foram preenchidos
    //const camposAValidar = ["name", "email", "username", "password", "confirmPassword", "funcao"];
    //const valoresAValidar = camposAValidar.map((campo) => data[campo]);

    if (!data.name || !data.email || !data.username || !data.password || !data.confirmPassword || !data.funcao){//(valoresAValidar.some((value) => (typeof value === 'string' && value.trim() == '') || value == null)) {
      // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
      //console.log(valoresAValidar);
      return alert("Todos os dados do usuário, exceto a imagem, são obrigatórios!");
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      return alert("As senhas não coincidem!");
    }

    if (usuario) {
      return alert("Usuário editado");
    }
    else{
      cadastrarUsuario(data);
    }
  }
  
  

  return (
    <>
      <form className="grid grid-cols-2 pt-10 pl-16 pb-16" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-2">
          <InputField
            label="Nome"
            value={name}
            onChange={setName}
            type="text"
            id="name"
            //required
          />
          <InputField
            label="E-mail"
            value={email}
            onChange={setEmail}
            type="email"
            id="email"
            //required
          />
          <InputField
            label="Usuário"
            value={username}
            onChange={setUsername}
            type="text"
            id="username"
            //required
          />
          <InputField
            label="Senha"
            value={password}
            onChange={setPassword}
            type="password"
            id="password"
            //required
          />
          <InputField
            label="Confirmar Senha"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            id="confirmPassword"
            //required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <InputField
              label="Função"
              value={funcao}
              onChange={setFuncao}
              type="text"
              id="funcao"
              //required
          />
          <ImageUpload
            label="Imagem"
            onChange={setImage}
          />
          
          <ButtonCadastrar label={usuario ? "Editar" : "Cadastrar"}/>
        </div>

      </form>
    </>
  );
}