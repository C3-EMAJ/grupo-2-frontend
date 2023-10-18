import { React, useState } from 'react';

import InputField from './ModalItems';
//import { DigitarInfo, ButtonCadastrar, CheckboxSimNao } from './ModalItems';

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

  //Dados Socioeconômicos

  return (
    <>
      <main class="flex flex-col px-8 overflow-y-auto">
        <div>      
          <h1 className="text-2xl font-semibold">Cadastrar Assistido</h1>
        </div>
        <form class="" onSubmit={handleSubmit}>
          <div class="flex justify-beetween">
          <div class="flex flex-col p-3">
            <h1 class="font-semibold">Dados Pessoais</h1>

              <label htmlFor="name">Nome</label>
              <input class="border"value={name} onChange={(event) => {setName(event.target.value)} } type="text" id="name" required/>

              <label htmlFor="cpf">CPF</label>
              <input class="border" value={cpf} onChange={(event) => {setCpf(event.target.value)} } type="number" id="cpf" required/>

              <label htmlFor="rg">RG</label>
              <input class="border" value={rg} onChange={(event) => {setRg(event.target.value)} } type="number" id="rg" required/>

            <h1 class="font-semibold">Contato</h1>

              <label htmlFor="telefone1">Telefone 1</label>
              <input class="border" value={telefone1} onChange={(event) => {setTelefone1(event.target.value)} } type="number" id="telefone1" required/>

              <label htmlFor="telefone2">Telefone 2</label>
              <input class="border" value={telefone2} onChange={(event) => {setTelefone2(event.target.value)} } type="number" id="telefone2"/>

              <label htmlFor="email">E-mail</label>
              <input class="border" value={email} onChange={(event) => {setEmail(event.target.value)} } type="email" id="email"/>
          </div>
          <div class="flex flex-col p-3">

          </div>
          </div>
        <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );

}


function ddAssistidos() {
  return (
    <>
    <form class="space-y-2 w-2/4">
    <h1 class="font-semibold">
      DADOS PESSOAIS
    </h1>
    
    <p class="text-sm my-1">
    Representado(a)
    </p>
    
    
    <h1 class="font-semibold pt-5">
      CONTATO
    </h1>
    
  </form>
  
    <h1 class="font-semibold">
      DADOS SOCIOECONÔMICOS
    </h1>
    </>
  )
}

          