import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, ImageUpload, SelectFuncao } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import { useCadastrarUsuario } from '../../../Services/cadastrarUsuario'
import { useEditarUsuario } from '../../../Services/editarUsuario';

//validadores
import { validarData, validarSenha } from '../../../Utils/validadores';


//Função contendo os componentes necessários para o cadastro de usuários
export default function Usuarios({ usuario }) {

  const { cadastrarUsuario, cadastrando } = useCadastrarUsuario();
  const { editarUsuario, editando } = useEditarUsuario();

  //const para exibir o loader
  const loader = () => {
    if (cadastrando || editando) {
      return <Loader />;
    }
  };

  // Dados do Usuário
  const [name, setName] = useState(usuario ? usuario.name : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");
  const [username, setUsername] = useState(usuario ? usuario.username : "");
  const [password, setPassword] = useState(usuario ? usuario.password : "");
  const [confirmPassword, setConfirmPassword] = useState(usuario ? usuario.confirmPassword : "");
  const [role, setRole] = useState(usuario ? usuario.role : "");
  const [image, setImage] = useState(usuario ? usuario.image : "");

  //função que faz a requisição para submeter o formulário
  function handleSubmit(event) { 
    event.preventDefault();

    //objeto contendo as informações do usuário
    const data = { name, email, username, password, confirmPassword, role, image };

    const required = [ 'name', 'email', 'username', 'password', 'confirmPassword', 'role' ]

    // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
    if (!validarData(data, required)){
      return alert("Todos os campos, exceto a imagem são obrigatórios")
    }

    //Caso todos os campos necessários estiverem preenchidos, então parte para as validações individuais
    else {
      // Verificar se as senhas coincidem
      if (password !== confirmPassword) {
        return alert("As senhas não coincidem!");
      }

      //Validar se a senha possui um mínimo de 8 caracteres
      if (validarSenha(password)) {
        
        if (role === "Selecione") {
          return alert ("É necessário informar a função do usuário!")
        }
        //Se o usuário foi selecionado para edição então chama o hook de edição de usuário
        if (usuario) {
          //console.log(data)
          editarUsuario(data);
        }
    
        //Se não, então chama o hook de cadastrar um novo usuário
        else{
          //console.log(data)
          cadastrarUsuario(data);
        }

      }

    }

  }

  return (
    <>
      {loader()}
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