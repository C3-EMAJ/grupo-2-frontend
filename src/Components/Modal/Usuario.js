import React from 'react';
import DigitarInfo from './items';

export default function Usuario() {
  return (
    <div>
      <div class="px-8">
        <div class="">
          <h2 className="text-2xl p-4 font-semibold">Cadastro Usuário</h2>
        </div>
        <div class="flex justify-between p-3">
          <ul class="space-y-2 w-2/4">
            <DigitarInfo Name="Nome" />
            <DigitarInfo Name="E-mail" />
            <DigitarInfo Name="Usuário" />
            <DigitarInfo Name="Senha" />
            <DigitarInfo Name="Confirmar Senha" />
            <button class="bg-orange text-sm rounded p-1 text-white hover:text-black">
              Cadastrar
            </button>
          </ul>
          <ul class="space-y-2 w-2/4">
            <DigitarInfo Name="Função" />
            <DigitarInfo Name="Imagem" />
          </ul>
        </div>
      </div>
      
    </div>
  )
}