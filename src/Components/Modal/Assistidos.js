import React, { useState } from 'react';
import InputField from './ModalItems/inputTeste'; // Importe o componente InputField

export default function Assistidos() {
    function handleSubmit(event){
        event.preventDefault()
          const data = {name, cpf, rg, email, telefone1, telefone2}
          
          console.log(data)
    
       //   fetch("http://10.230.158.48:3333/form", {
       //       method:"POST",
       //       body: JSON.stringify(data),
       //       headers: {'Content-Type':'application/json'}
       //   })
      }
      //Dados Pessoais
      const [name, setName] = useState("")
      const [cpf, setCpf] = useState("")
      const [rg, setRg] = useState("")
    
      //Contato
      const [telefone1, setTelefone1] = useState("")
      const [telefone2, setTelefone2] = useState("")
      const [email, setEmail] = useState("")

  return (
    <>
      <main className="flex flex-col px-8 overflow-y-auto">
        <div>
          <h1 className="text-2xl font-semibold">Cadastrar Assistido</h1>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex justify-beetween">
            <InputField
              label="Nome"
              value={name}
              onChange={setName}
              type="text"
              id="name"
              required
            />
            <InputField
              label="CPF"
              value={cpf}
              onChange={setCpf}
              type="number"
              id="cpf"
              required
            />
            <InputField
              label="RG"
              value={rg}
              onChange={setRg}
              type="number"
              id="rg"
              required
            />
            <InputField
              label="Telefone 1"
              value={telefone1}
              onChange={setTelefone1}
              type="number"
              id="telefone1"
              required
            />
            <InputField
              label="Telefone 2"
              value={telefone2}
              onChange={setTelefone2}
              type="number"
              id="telefone2"
            />
            <InputField
              label="E-mail"
              value={email}
              onChange={setEmail}
              type="email"
              id="email"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
}
