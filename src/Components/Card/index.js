import React from 'react'
import profile from '../../images/profile.png'

function CardAssistido() {
  let lista = JSON.parse(localStorage.getItem('lista'))
  return (
    <>
      <div className="grid grid-cols-6 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Telefone</div>
        <div className="col-span-1">CPF</div>
        <div className="col-span-1">Data de Nascimento</div>
      </div>

      {lista && lista.map((assistido, index) => (
        <div key={index} className="grid grid-cols-6 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className="col-span-1 flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className="col-span-1 flex items-center">{assistido.name}</div>
          <div className="col-span-1 flex items-center">{assistido.email}</div>
          <div className="col-span-1 flex items-center">{assistido.telefone}</div>
          <div className="col-span-1 flex items-center">{assistido.cpf}</div>
          <div className="col-span-1 flex items-center">{assistido.date}</div>
        </div>
      ))}
    </>
  )
}

let lista2 = [
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel Trindade de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'},
  {nome: "Samuel de Lemos", email:'samucalemos9@gmail.com', telefone:'53999004470', cpf:'03508272060', date:'22/08/2000'}
]

function CardUsuario() {
  return(
    <>
      <div className="grid grid-cols-6 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Telefone</div>
        <div className="col-span-1">CPF</div>
        <div className="col-span-1">Data de Nascimento</div>
      </div>

      {lista2.map((assistido, index) => (
        <div key={index} className="grid grid-cols-6 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className="col-span-1 flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className="col-span-1 flex items-center">{assistido.nome}</div>
          <div className="col-span-1 flex items-center">{assistido.email}</div>
          <div className="col-span-1 flex items-center">{assistido.telefone}</div>
          <div className="col-span-1 flex items-center">{assistido.cpf}</div>
          <div className="col-span-1 flex items-center">{assistido.date}</div>
        </div>
      ))}
    </>
  )
}

export { CardUsuario, CardAssistido}