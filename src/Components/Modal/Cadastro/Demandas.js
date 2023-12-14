import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, InputText } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import { useCadastrarDemanda } from '../../../Services/cadastrarDemanda';
import { useEditarDemanda } from '../../../Services/editarDemanda';

//validadores
import { validarData } from '../../../Utils/validadores';


//Função contendo os componentes necessários para o cadastro de usuários
export default function Demandas({ demanda }) {
  const { cadastrarDemanda, cadastrando } = useCadastrarDemanda();
  const { editarDemanda, editando } = useEditarDemanda();

  // Dados do Usuário
  const id_uuid = demanda ? demanda.id_uuid : null
  const usuario = demanda ? demanda.usuario : localStorage.getItem("name");
  const [titulo, setTitulo] = useState(demanda ? demanda.titulo : "");
  const [assistido, setAssistido] = useState(demanda ? demanda.assistido : "");
  const [descricao, setDescricao] = useState(demanda ? demanda.descricao : "");
  const [image, setImage] = useState(demanda ? demanda.image : "");

  //função que faz a requisição para submeter o formulário
  const handleSubmit = async(event) => {
    event.preventDefault();

    //objeto contendo as informações do usuário
    const data = {id_uuid, usuario, titulo, assistido, descricao, image };
    demanda ? console.log("Está sendo editado") : delete data.id_uuid;
    const dataRequired = { titulo, assistido, descricao };
    console.log(data)
    //console.log(dataRequired)

    const required = [ 'titulo', 'assistido', 'descricao' ]

    // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
    if (!validarData(dataRequired, required)){
      return alert("Todos os campos, exceto a imagem são obrigatórios")
    }
    
    //Se a demanda foi selecionada para edição então chama o hook de edição de demanda
    if (demanda) {
      //console.log(dataEdit);
      await editarDemanda(data);
      window.location.reload();
    }
    //Se não, então chama o hook de cadastrar uma nova demanda
    else{
      //console.log(data)
      await cadastrarDemanda(data);
      window.location.reload();
    }
  }
  
  const columStyle = "flex flex-col space-y-3"

  return (
    <>
      {editando || cadastrando ? <Loader /> : null}
      <form className="grid grid-cols-2 pt-10 pl-16 pb-16" onSubmit={handleSubmit}>

        <div className={columStyle}>

            <div className="flex gap-2">
                <p>Usuário responsável:</p>
                <p className='font-semibold'>{usuario}</p>
            </div>

            <InputField
                label="Título"
                value={titulo}
                onChange={setTitulo}
                type="text"
                id="titulo"
                //required
            />
          
          <InputField
              label="Assistido"
              value={assistido}
              onChange={setAssistido}
              type="text"
              id="assistido"
              //required
          />

            <InputField
                label="Imagem"
                value={image}
                onChange={setImage}
                type="text"
                id="image"
                //required
            />

            <ButtonCadastrar label={demanda ? "Editar" : "Cadastrar"}/>

        </div>

        <div className={columStyle}>

            <InputText
                label="Descrição"
                value={descricao}
                onChange={setDescricao}
                type="text"
                id="descricao"
                //required
            />


        </div>

      </form>
    </>

  );
}