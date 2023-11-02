import React, { useState } from 'react';

//Components
import ModalExcluir from '../Modal/Excluir';
import Loader from '../Loader';
import { useAssistidos } from '../../Data/getAssistidos';

//Imagens
import profile from '../../images/profile.png';
import lixeira from '../../images/lixeira.png';

function CardAssistido({search}) {

  const [openModal, setOpenModal] = useState(false);
  const [selectedAssistido, setSelectedAssistido] = useState(null);
  const { listaAssistidos, loading } = useAssistidos();

  const loader = () => {
    if (loading) {
      return <Loader />;
    }
  };

  const openDeleteModal = (assistido) => {
    setSelectedAssistido(assistido);
    setOpenModal(true);
  };

  // Função para filtrar assistidos com base na pesquisa
  const filteredAssistidos = listaAssistidos.filter((assistido) => {
    if (!search) {
      return true; // Retorna todos os assistidos se a pesquisa estiver vazia
    }
    if (assistido && assistido.name && typeof assistido.name === 'string') {
      return assistido.name.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  });
  //console.log("teste no card",search)
  return (
    <div>
      {loader()}
      <div className="grid grid-cols-7 mx-3 my-3 font-semibold text-sm text-black">
        <div className=" col-start-2">Nome</div>
        <div>E-mail</div>
        <div>Telefone</div>
        <div>CPF</div>
        <div>Data de Nascimento</div>
      </div>
      {filteredAssistidos &&
        filteredAssistidos.map((assistido, id) => (
          <div key={id} className="grid grid-cols-7 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
            <div className=" flex items-center">
              <img src={profile} className="rounded-full" alt="foto do perfil" />
            </div>
            <div className=" flex items-center">{assistido.name}</div>
            <div className=" flex items-center">{assistido.email}</div>
            <div className=" flex items-center">{assistido.telefone}</div>
            <div className=" flex items-center">{assistido.cpf}</div>
            <div className=" flex items-center">{assistido.date}</div>
            <div className=" flex items-center justify-end pr-16">
              <img onClick={() => openDeleteModal(assistido)} className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} />
            </div>
          </div>
        ))}
      <ModalExcluir isOpen={openModal} isClose={() => setOpenModal(false)} page={'Assistidos'} assistido={selectedAssistido} />
    </div>
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
        <div className=" col-start-2">Nome</div>
        <div>E-mail</div>
        <div>Função</div>
        <div>Usuário</div>
      </div>

      {lista.map((user, index) => (
        <div key={index} className="grid grid-cols-6 h-20 mx-3 my-1 rounded-lg bg-white hover:border text-xs">
          <div className=" flex items-center">
            <img src={profile} className="rounded-full" alt="foto do perfil" />
          </div>
          <div className=" flex items-center">{user.name}</div>
          <div className=" flex items-center">{user.email}</div>
          <div className=" flex items-center">{user.funcao}</div>
          <div className=" flex items-center">{user.usuario}</div>
          <div className=" flex items-center justify-end pr-16">
            <img type="button" onClick={() => setOpenModal(true)} className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} />
          </div>
        </div>
      ))}
    </>
  )
}

export {CardUsuario, CardAssistido}