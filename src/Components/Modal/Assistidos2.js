import React from 'react';
import { DigitarInfo, ButtonCadastrar, CheckboxSimNao } from './ModalItems';

export default function Assistidos() {

  const button = document.querySelector("button")
  button.addEventListener("click", (e) => {
    e.preventDefault()
    const name = document.getElementById("Name").value
    const cpf = document.getElementById("CPF").value
    const email = document.getElementById("RG").value
    const password = document.getElementById("Data de Nascimento").value

    const data = {
        name, cpf, email, password
    }

    console.log(data)
})
  
  return (
      <div class="px-8">
        <div class="">
          <h2 className="text-2xl p-4 font-semibold">Cadastrar Assistido</h2>
        </div>
        <div class="flex justify-between p-3">
          <form class="space-y-2 w-2/4">
            <h1 class="font-semibold">
              DADOS PESSOAIS
            </h1>
            <DigitarInfo id="Nome" type="text"/>
            <DigitarInfo id="CPF" type="number"/>
            <DigitarInfo id="RG" type="number"/>
            <DigitarInfo id="Data de Nascimento" type="date"/>
            <label>
            <p class="text-sm my-1">
            Representado(a)
            </p>
            <CheckboxSimNao />
            </label>
            <h1 class="font-semibold pt-5">
              CONTATO
            </h1>
            <DigitarInfo name="Telefone" type="tel"/>
            <DigitarInfo name="Telefone 2" type="tel"/>
            <DigitarInfo name="Endereço" type="text"/>
            <DigitarInfo name="E-mail" type="email"/>
            <DigitarInfo name="Conhecido" type="text"/>
          </form>
          <form class="space-y-2 w-2/4">
            <h1 class="font-semibold">
              DADOS SOCIOECONÔMICOS
            </h1>
            <DigitarInfo name="Profissão" type=""/>
            <DigitarInfo name="Renda Familiar" type=""/>
            <DigitarInfo name="Dependentes" type=""/>
            <ButtonCadastrar id="button"/>
          </form>
        </div>
      </div>
  );

}