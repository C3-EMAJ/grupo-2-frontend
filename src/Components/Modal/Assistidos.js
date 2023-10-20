import React, { useState } from 'react';
import { InputField, ButtonCadastrar, CheckboxSimNao } from './ModalItems';

export default function Assistidos() {
  //let lista = []
    function handleSubmit(event){
        event.preventDefault()
        const data = {name, cpf, rg, date, isChecked, email, telefone1, telefone2, profissao, renda, dependentes}
        
        console.log(data)
        //lista.push(data)
        //console.log(lista)

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
      const [date, setDate] = useState("")
      const [isChecked, setIsChecked] = useState(false);
      
      //Contato
      const [telefone1, setTelefone1] = useState("")
      const [telefone2, setTelefone2] = useState("")
      const [email, setEmail] = useState("")
      
      //Dados Socioeconômicos
      const [profissao, setProfissao] = useState("")
      const [renda, setRenda] = useState("")
      const [dependentes, setDependentes] = useState("")

  return (
    <>
      <main className="flex flex-col px-11 overflow-y-auto">
        <h1 className="py-4 text-2xl font-semibold">Cadastrar Assistido</h1>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1 w-2/4">
            <h1 class="font-semibold">Dados Pessoais</h1>
            <InputField
              label="Nome"
              value={name}
              onChange={setName}
              type="text"
              id="name"
              //required
            />
            <InputField
              label="CPF"
              value={cpf}
              onChange={setCpf}
              type="number"
              id="cpf"
              //required
            />
            <InputField
              label="RG"
              value={rg}
              onChange={setRg}
              type="number"
              id="rg"
              //required
            />
            <InputField
              label="Data de Nasimento"
              value={date}
              onChange={setDate}
              type="date"
              id="date"
              //required
            />
            <CheckboxSimNao
                label="Representado:"
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />

            <h1 class="font-semibold pt-3">Contato</h1>
            <InputField
              label="Telefone 1"
              value={telefone1}
              onChange={setTelefone1}
              type="number"
              id="telefone1"
              //required
            />
            <InputField
              label="Telefone 2"
              value={telefone2}
              onChange={setTelefone2}
              type="number"
              id="telefone2"
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
          </div>

          <div class="flex flex-col space-y-1 w-2/4">

          <h1 class="font-semibold">Dados Socioeconômicos</h1>
          <InputField
              label="Profissão"
              value={profissao}
              onChange={setProfissao}
              type="text"
              id="profissao"
              //required
            />
            <InputField
              label="Renda Familiar"
              value={renda}
              onChange={setRenda}
              type="number"
              id="renda"
              //required
            />
            <InputField
              label="Dependentes"
              value={dependentes}
              onChange={setDependentes}
              type="number"
              id="dependentes"
              //required
            />
          <ButtonCadastrar />
          </div>
        </form>
      </main>
    </>
  );
}
