import React, { useState } from 'react';
import { InputField, ButtonCadastrar, ImageUpload } from './Items';

export default function Usuarios() {

  function handleSubmit(event){
    event.preventDefault()
    const data = {name, email, username, password, confirmPassword, funcao, image}
    console.log(data)
    //fetch("http://127.0.0.1:8000/assistido/", {
    //    method:"POST",
    //    body: JSON.stringify(dados),
    //     headers: {'Content-Type':'application/json'}
    // })
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