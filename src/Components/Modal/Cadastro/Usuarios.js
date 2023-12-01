import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, ImageUpload, SelectFuncao } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import { useCadastrarUsuario } from '../../../Services/cadastrarUsuario'
import { useEditarUsuario } from '../../../Services/editarUsuario';

//validadores
import { validarData, validarEmailFurg, validarLenPassword, validarRole, validarPassword, validarProfessor } from '../../../Utils/validadores';


//Função contendo os componentes necessários para o cadastro de usuários
export default function Usuarios({ usuario }) {
  const { cadastrarUsuario, cadastrando } = useCadastrarUsuario();
  const { editarUsuario, editando } = useEditarUsuario();

  // Dados do Usuário
  const id_uuid = usuario ? usuario.id_uuid : null
  const [name, setName] = useState(usuario ? usuario.name : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");
  const [username, setUsername] = useState(usuario ? usuario.username : "");
  const [password, setPassword] = useState(usuario ? usuario.password : "");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(usuario ? usuario.role : "");
  const [image, setImage] = useState(usuario ? usuario.image : "");

  //função que faz a requisição para submeter o formulário
  const handleSubmit = async(event) => {
    event.preventDefault();

    //objeto contendo as informações do usuário
    const data = {id_uuid, name, email, username, password, role, image };
    usuario ? console.log("Está sendo editado") : delete data.id_uuid;
    const dataRequired = {name, email, username, password, confirmPassword, role};
    console.log(data)
    //console.log(dataRequired)

    const required = [ 'name', 'email', 'username', 'password', 'confirmPassword', 'role' ]

    // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
    if (!validarData(dataRequired, required)){
      return alert("Todos os campos, exceto a imagem são obrigatórios")
    }
    //Validar se o usuário possui o cargo de Professor
    if (!validarProfessor(localStorage.getItem("role"))){
      return
    }
    //Valiar se o e-mail é um email FURG
    if (!validarEmailFurg(data.email)){
      return
    }
    //Validar se a senha possui um mínimo de 8 caracteres
    if (!validarLenPassword(password)){
      return
    }
    // Verificar se as senhas coincidem
    if (!validarPassword(password, confirmPassword)){
      return
    }
    //Validando se o cargo foi preenchido
    if (!validarRole(data.role)){
      return
    }
    //Se o usuário foi selecionado para edição então chama o hook de edição de usuário
    if (usuario) {
      //console.log(dataEdit);
      await editarUsuario(data);
      window.location.reload();
    }
    //Se não, então chama o hook de cadastrar um novo usuário
    else{
      //console.log(data)
      await cadastrarUsuario(data);
      window.location.reload();
    }
  }

  return (
    <>
      {editando || cadastrando ? <Loader /> : null}
      <form className="grid grid-cols-2 pt-10 pl-16 pb-16" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-2">
          <InputField
            label="Nome"
            value={name}
            onChange={setName}
            type="text"
            id="name"
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
          <InputField
            label="Usuário"
            value={username}
            onChange={setUsername}
            type="text"
            id="username"
            //required
          />
          <InputField
            label="Senha"
            value={password}
            onChange={setPassword}
            type="password"
            id="password"
            //required
          />
          <InputField
            label="Confirmar Senha"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            id="confirmPassword"
            //required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <SelectFuncao
          label="Função"
          onChange={setRole}
          id="selectFuncao"
          //required
          />
          <ImageUpload
            label="Imagem"
            onChange={setImage}
          />
          
          <ButtonCadastrar label={usuario ? "Editar" : "Cadastrar"}/>
        </div>

      </form>
    </>
  );
}