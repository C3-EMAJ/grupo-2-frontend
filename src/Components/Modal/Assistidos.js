import React, { useState } from 'react';
import { InputField, ButtonCadastrar, CheckboxSimNao } from './ModalItems';




export default function Assistidos() {
  let lista = []
  function handleSubmit(event){
    event.preventDefault()
    const dadosRepresentado = {nameRepresentado, cpfRepresentado, rgRepresentado, dateRepresentado}
    const data = {name, cpf, rg, dadosRepresentado : isChecked ? dadosRepresentado : null}
    isChecked ? console.log("teste") : delete data.dadosRepresentado
    console.log(data)
    lista.push(data)
    localStorage.setItem('lista', JSON.stringify(lista))
    console.log(lista)

        //fetch("http://127.0.0.1:8000/assistido/", {
        //    method:"POST",
        //    body: JSON.stringify(data),
        //     headers: {'Content-Type':'application/json'}
        // })
    }

    const [nameRepresentado, setNameRepresentado] = useState("")
    const [cpfRepresentado, setCpfRepresentado] = useState("")
    const [rgRepresentado, setRgRepresentado] = useState("")
    const [dateRepresentado, setDateRepresentado] = useState("")

    function representado(isChecked) {
      if (isChecked === true){
        return (
          <div class="flex flex-col space-y-1 py-5">
            <h1 class="font-semibold">Dados do Representado</h1>
            <InputField
              label="Nome"
              value={nameRepresentado}
              onChange={setNameRepresentado}
              type="text"
              id="nameRepresentado"
              //required
            />
            <InputField
              label="CPF"
              value={cpfRepresentado}
              onChange={setCpfRepresentado}
              type="number"
              id="cpfRepresentado"
              //required
            />
            <InputField
              label="RG"
              value={rgRepresentado}
              onChange={setRgRepresentado}
              type="number"
              id="rgRepresentado"
              //required
            />
            <InputField
              label="Data de Nasimento"
              value={dateRepresentado}
              onChange={setDateRepresentado}
              type="date"
              id="dateRepresentado"
              //required
            />
          </div>
        ); 
      }
      return null
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
        <h1 className="pt-4 pb-3 text-2xl font-semibold">Cadastrar Assistido</h1>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1 w-2/4">
          <CheckboxSimNao
                label="Cadastrar Dependente"
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            
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
          {representado(isChecked)}
          <ButtonCadastrar />
          </div>
        </form>
      </main>
    </>
  );
}
