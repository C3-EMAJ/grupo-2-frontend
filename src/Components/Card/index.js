import React, { useState } from 'react';
import ModalExcluir from '../Modal/Excluir';
import profile from '../../images/profile.png';
import lixeira from '../../images/lixeira.png';

function CardAssistido() {
  let lista = [
    { nome: "Vitor de ÁvilaFreitas", email: "kjsd@zklhcd", cpf: "00000" },
    { nome: "Samuel Trindade de Lemos", email: "aaaaaaa@bbbbb", cpf: "123" },
    { nome: "fulano de tal", email: "123@456", cpf: "987654" }
  ];

  const [openModal, setOpenModal] = useState(false);
  const [selectedAssistido, setSelectedAssistido] = useState(null);

  const openDeleteModal = (assistido) => {
    setSelectedAssistido(assistido);
    setOpenModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-7 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Telefone</div>
        <div className="col-span-1">CPF</div>
        <div className="col-span-1">Data de Nascimento</div>
      </div>
      {lista &&
        lista.map((assistido, id) => (
          <div key={id} className="grid grid-cols-7 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
            <div className="col-span-1 flex items-center">
              <img src={profile} className="rounded-full" alt="foto do perfil" />
            </div>
            <div className="col-span-1 flex items-center">{assistido.nome}</div>
            <div className="col-span-1 flex items-center">{assistido.email}</div>
            <div className="col-span-1 flex items-center">{assistido.telefone}</div>
            <div className="col-span-1 flex items-center">{assistido.cpf}</div>
            <div className="col-span-1 flex items-center">{assistido.date}</div>
            <div className="col-span-1 flex items-center justify-end pr-16">
              <img onClick={() => openDeleteModal(assistido)} className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} />
            </div>
          </div>
        ))}
      <ModalExcluir isOpen={openModal} isClose={() => setOpenModal(false)} page={'Assistidos'} assistido={selectedAssistido} />
    </>
  );
}


function CardUsuario() {
  let lista = [
    {nome:"Samuel Lemos", email:"aaaaaaa@bbbbb"}
  ]

  const [openModal, setOpenModal] = useState(false);

  return(
    <>
      <ModalExcluir isOpen={openModal} isClose={() => setOpenModal(!openModal)} page={'Usuarios'}/>
      <div className="grid grid-cols-6 mx-3 my-3 font-semibold text-sm text-black">
        <div className="col-span-1 col-start-2">Nome</div>
        <div className="col-span-1">E-mail</div>
        <div className="col-span-1">Função</div>
        <div className="col-span-1">Usuário</div>
      </div>

      {lista.map((user, index) => (
        <div key={index} className="grid grid-cols-6 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className="col-span-1 flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className="col-span-1 flex items-center">{user.name}</div>
          <div className="col-span-1 flex items-center">{user.email}</div>
          <div className="col-span-1 flex items-center">{user.funcao}</div>
          <div className="col-span-1 flex items-center">{user.usuario}</div>
          <div className="col-span-1 flex items-center justify-end pr-16">
            <img type="button" onClick={() => setOpenModal(true)} className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} />
          </div>
        </div>
      ))}
    </>
  )
}

export {CardUsuario, CardAssistido}