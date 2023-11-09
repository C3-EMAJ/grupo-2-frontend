import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, ImageUpload } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import {useCadastrarUsuario} from '../../../Data/cadastrarUsuario'


//Função contendo os componentes necessários para o cadastro de usuários
export default function Usuarios() {

  const {cadastrarUsuario, cadastrando, erro} = useCadastrarUsuario(); // Use o hook de cadastro

  function handleSubmit(event){
    event.preventDefault()
    const data = {name, email, username, password, confirmPassword, funcao, image}
    console.log(data)
    
    //Dados do usuário verificados se foram preenchidos
    const camposAValidar = ["name", "email", "username", "password", "confirmPassword", "funcao"]
    const valoresAValidar = camposAValidar.map((campo) => data[campo]);
    if (valoresAValidar.some((value) => typeof value === 'string' && value.trim() === '')) {
      // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
      return alert("Todos os dados do usuário, exceto a imagem, são obrigatórios!")
    }

    else{
      cadastrarUsuario(data);
    }
    if (cadastrando) {
      <>
        {Loader()}
      </>
    }
    else if (erro) {
      return alert("Ocorreu um erro ao cadastrar o Usuário\n\n" + "Código do erro: " + erro.message);
    }

  }
  
  //Dados do Usuário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [funcao, setFuncao] = useState("");
  const [image, setImage] = useState("");

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
          
          <ButtonCadastrar />
        </div>

      </form>
    </>
  );
}