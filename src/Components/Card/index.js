import React from 'react'

//Imagens
import profile from '../../images/profile.png'
import lixeira from '../../images/lixeira.png'



function CardAssistido() {
  let lista = [
    {nome:"Samuel Lemos", email:"aaaaaaa@bbbbb"}
  ]
  function deleteAssistido(id) {
    fetch("http://127.0.0.1:8000/deleteAssistido/", {
      method:"POST",
      body: JSON.stringify(id),
      headers: {'Content-Type':'application/json'}
    })
    return console.log("tomaaaaaaa")
  }

  return (
    <>
      <div className="grid grid-cols-7 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Telefone</div>
        <div className="col-span-1">CPF</div>
        <div className="col-span-1">Data de Nascimento</div>
      </div>

      {lista && lista.map((assistido, index) => (
        <div key={index} className="grid grid-cols-7 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className="col-span-1 flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className="col-span-1 flex items-center">{assistido.nome}</div>
          <div className="col-span-1 flex items-center">{assistido.email}</div>
          <div className="col-span-1 flex items-center">{assistido.telefone}</div>
          <div className="col-span-1 flex items-center">{assistido.cpf}</div>
          <div className="col-span-1 flex items-center">{assistido.date}</div>
          <div className="col-span-1 flex items-center justify-end pr-16">
            <img type="button" onClick={() => deleteAssistido(7)} className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} />
          </div>
        </div>
      ))}
    </>
  )
}


let listaUsuarios = [
  
]

function CardUsuario() {
  return(
    <>
      <div className="grid grid-cols-5 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Função</div>
        <div className="col-span-1">Usuário</div>
      </div>

      {listaUsuarios.map((user, index) => (
        <div key={index} className="grid grid-cols-5 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className="col-span-1 flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className="col-span-1 flex items-center">{user.name}</div>
          <div className="col-span-1 flex items-center">{user.email}</div>
          <div className="col-span-1 flex items-center">{user.funcao}</div>
          <div className="col-span-1 flex items-center">{user.usuario}</div>
        </div>
      ))}
    </>
  )
}

export {CardUsuario, CardAssistido}