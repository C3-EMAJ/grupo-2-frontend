import React, { useState } from 'react';

//Components
import Modal from '../Modal/Cadastro/index'
import ModalExcluir from '../Modal/Excluir';
import Loader from '../Loader';
import { useAssistidos } from '../../Services/getAssistidos';
import { useUsuarios } from '../../Services/getUsuarios';

//Imagens
import profile from '../../images/profile.png';
import lixeira from '../../images/lixeira.png';

function CardAssistido({search}) {

  const [openModal, setOpenModal] = useState(false);
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [selectedAssistido, setSelectedAssistido] = useState(null);
  const { listaAssistidos, loading } = useAssistidos();

  const openDeleteModal = (assistido) => {
    setSelectedAssistido(assistido);
    setOpenModalExcluir(true);
  };

  const openEditModal = (assistido) => {
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

  return (
    <>
      {loading ? <Loader /> : null}

      <div className="grid grid-cols-7 mx-3 my-3 font-semibold text-black">
        <p className="col-start-2">Nome</p>
        <p>E-mail</p>
        <p>Telefone</p>
        <p>CPF</p>
        <p>Data de Nascimento</p>
      </div>

      {filteredAssistidos && filteredAssistidos.map((assistido, id_uuid) => (

          <div key={id_uuid} onClick={() => openEditModal(assistido)} className="grid grid-cols-7 h-20 mx-3 my-1.5 rounded bg-white hover:border text-sm cursor-pointer">
            <div className="flex items-center">
              <img src={profile} className="rounded-full" alt="foto do perfil" />
            </div>
            <p className="flex items-center">{assistido.name}</p>
            <p className="flex items-center">{assistido.email}</p>
            <p className="flex items-center">{assistido.telefone}</p>
            <p className="flex items-center">{assistido.cpf}</p>
            <p className="flex items-center">{assistido.date}</p>
            <div className="flex items-center justify-end pr-16">
              <img className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  openDeleteModal(assistido);
                }} />
            </div>
          </div>

        ))}

      <ModalExcluir isOpen={openModalExcluir} isClose={() => setOpenModalExcluir(false)} page={'Assistidos'} assistido={selectedAssistido} />
      <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)} page="Assistidos" assistido={selectedAssistido} />
    </>
  );
}


function CardUsuario({search}) {

  const [openModal, setOpenModal] = useState(false);
  const [openModalExcluir, setOpenModalExcluir] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const { listaUsuarios, loading } = useUsuarios();

  const openDeleteModal = (usuario) => {
    setSelectedUsuario(usuario);
    setOpenModalExcluir(true);
  };

  const openEditModal = (usuario) => {
    setSelectedUsuario(usuario);
    setOpenModal(true);
  };

  // Função para filtrar Usuarios com base na pesquisa
  const filteredUsuarios = listaUsuarios.filter((usuario) => {
    if (!search) {
      return true; // Retorna todos os Usuarios se a pesquisa estiver vazia
    }
    if (usuario && usuario.name && typeof usuario.name === 'string') {
      return usuario.name.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  });

  return (
    <>
      {loading ? <Loader /> : null}

      <div className="grid grid-cols-6 mx-3 my-3 font-semibold text-black">
        <p className="col-start-2">Nome</p>
        <p>E-mail</p>
        <p>Função</p>
        <p>Usuário</p>
      </div>

      {filteredUsuarios && filteredUsuarios.map((usuario, id_uuid) => (

          <div key={id_uuid} onClick={() => openEditModal(usuario)} className="grid grid-cols-6 h-20 mx-3 my-1.5 rounded bg-white hover:border text-sm cursor-pointer">
            <div className="flex items-center">
              <img src={profile} className="rounded-full" alt="foto do perfil" />
            </div>
            <p className="flex items-center">{usuario.name}</p>
            <p className="flex items-center">{usuario.email}</p>
            <p className="flex items-center">{usuario.role}</p>
            <p className="flex items-center">{usuario.username}</p>
            <div className="flex items-center justify-end pr-16">
              <img className="hover:scale-110 duration-75 cursor-pointer" src={lixeira} alt="" 
                onClick={(e) => {
                  e.stopPropagation();
                  openDeleteModal(usuario)
                }} />
            </div>
          </div>

        ))}

      <ModalExcluir isOpen={openModalExcluir} isClose={() => setOpenModalExcluir(false)} page={'Usuarios'} usuario={selectedUsuario} />
      <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)} page="Usuarios" usuario={selectedUsuario} />
    </>
  );
}


export { CardUsuario, CardAssistido }