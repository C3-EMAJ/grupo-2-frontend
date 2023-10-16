import React from 'react';
import DigitarInfo from './ModalItems/Inputs';
import ButtonCadastrar from './ModalItems/ButtonCadastrar';
import CheckboxSimNao from './ModalItems/CheckBoxSimNao';

export default function Assistidos() {
  return (
      <div class="px-8">
        <div class="">
          <h2 className="text-2xl p-4 font-semibold">Cadastrar Assistido</h2>
        </div>
        <div class="flex justify-between p-3">
          <ul class="space-y-2 w-2/4">
            <li class="font-semibold">
              DADOS PESSOAIS
            </li>
            <DigitarInfo Name="Nome" />
            <DigitarInfo Name="CPF" />
            <DigitarInfo Name="RG" />
            <DigitarInfo Name="Data de Nascimento" />
            <li>
            <div class="text-sm my-1">
            Representado(a)
            </div>
            <CheckboxSimNao />
            </li>
            <li class="font-semibold">
              CONTATO
            </li>
            <DigitarInfo Name="Telefone" />
            <DigitarInfo Name="Telefone 2" />
            <DigitarInfo Name="Endereço" />
            <DigitarInfo Name="E-mail" />
            <DigitarInfo Name="Conhecido" />
          </ul>
          <ul class="space-y-2 w-2/4">
            <li class="font-semibold">
              DADOS SOCIOECONÔMICOS
            </li>
            <DigitarInfo Name="Profissão" />
            <DigitarInfo Name="Renda Familiar" />
            <DigitarInfo Name="Dependentes" />
            <ButtonCadastrar />
          </ul>
        </div>
      </div>
  );
}