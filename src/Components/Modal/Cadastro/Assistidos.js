import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, CheckboxSimNao } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import {useCadastrarAssistido} from '../../../Data/cadastrarAssistido'

export default function Assistidos() {

  const {cadastrarAssistido, cadastrando, erro} = useCadastrarAssistido(); // Use o hook de cadastro

  function handleSubmit(event) {
    event.preventDefault();
    const dataRepresentado = { nameRepresentado, cpfRepresentado, rgRepresentado, dateRepresentado, estadoCivilRepresentado };
    const data = { name, cpf, rg, date, estadoCivil, telefone1, telefone2, email, profissao, renda, dependentes, dataRepresentado: isChecked ? dataRepresentado : null };
    isChecked ? console.log("possui representado") : delete data.dataRepresentado;
    //console.log(data);
    
    //Dados do usuário verificados se foram preenchidos
    const camposAValidar = ["name", "cpf", "rg", "date", "estadoCivil"]
    const valoresAValidar = camposAValidar.map((campo) => data[campo]);
    if (valoresAValidar.some((value) => typeof value === 'string' && value.trim() === '')) {
      // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
      return alert("Todos os dados pessoais são necessários!")  
    }

    //Dados do representado (caso tenha) verificados se foram preenchidos
    const camposAValidarRepresentado = ["nameRepresentado", "cpfRepresentado", "rgRepresentado", "dateRepresentado", "estadoCivilRepresentado"]
    const valoresAValidarRepresentado = camposAValidarRepresentado.map((campo) => dataRepresentado[campo]);
    if (isChecked) {
      if (valoresAValidarRepresentado.some((value) => typeof value === 'string' && value.trim() === '')) {
        // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
        return alert("Se a opção Cadastrar Representado estiver marcada é necessário o preenchimento dos dados do representado");
      }
    }
    else{
      cadastrarAssistido(data);
    }
    if (cadastrando) {
      return(
      <div>
        {Loader()}
      </div>
      );
    }
  
    else if (erro) {
      return alert("Ocorreu um erro ao cadastrar o Assistido\n\n" + "Código do erro: " + erro.message);
    }
  }
  
  //Dados Pessoais
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [date, setDate] = useState("")
  const [isChecked, setIsChecked] = useState(false);
  const [estadoCivil, setEstadoCivil] = useState("")
  
  //Contato
  const [telefone1, setTelefone1] = useState("")
  const [telefone2, setTelefone2] = useState("")
  const [email, setEmail] = useState("")
  
  //Dados Socioeconômicos
  const [profissao, setProfissao] = useState("")
  const [renda, setRenda] = useState("")
  const [dependentes, setDependentes] = useState("")
  
  //Dados pessoais do representado (caso tenha)
  const [nameRepresentado, setNameRepresentado] = useState("")
  const [cpfRepresentado, setCpfRepresentado] = useState("")
  const [rgRepresentado, setRgRepresentado] = useState("")
  const [dateRepresentado, setDateRepresentado] = useState("")
  const [estadoCivilRepresentado, setEstadoCivilRepresentado] = useState("")


  //Função para exibir o formulário de cadastrar um representado no modal
  function cadastroRepresentado(isChecked) {
    if (isChecked){
      return (
        <div className="flex flex-col space-y-1">
          <h1 className="font-semibold">Dados do Representado</h1>
          <InputField
            label="Nome"
            value={nameRepresentado}
            onChange={setNameRepresentado}
            type="text"
            id="nameRepresentado"
            //required
          />
          <InputField
            label="CPF"
            value={cpfRepresentado}
            onChange={setCpfRepresentado}
            type="number"
            id="cpfRepresentado"
            //required
          />
          <InputField
            label="RG"
            value={rgRepresentado}
            onChange={setRgRepresentado}
            type="number"
            id="rgRepresentado"
            //required
          />
          <InputField
            label="Data de Nasimento"
            value={dateRepresentado}
            onChange={setDateRepresentado}
            type="date"
            id="dateRepresentado"
            //required
          />
          <InputField
            label="Estado Civil"
            value={estadoCivilRepresentado}
            onChange={setEstadoCivilRepresentado}
            type="text"
            id="estadoCivilRepresentado"
            //required
          />
        </div>
      ); 
    }
  }

  //Componentes referentes ao cadastro de assistidos
  return (
    <>
      <form className="grid grid-rows-2 grid-cols-2 gap-y-5 pl-16" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-1">
          <CheckboxSimNao
            label="Cadastrar Representado?"
            isChecked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />

          <h1 className="font-semibold">Dados Pessoais</h1>
          <InputField
            label="Nome"
            value={name}
            onChange={setName}
            type="text"
            id="name"
            //required
          />
          <InputField
            label="CPF"
            value={cpf}
            onChange={setCpf}
            type="number"
            id="cpf"
            //required
          />
          <InputField
            label="RG"
            value={rg}
            onChange={setRg}
            type="number"
            id="rg"
            //required
          />
          <InputField
            label="Data de Nasimento"
            value={date}
            onChange={setDate}
            type="date"
            id="date"
            //required
          />
          <InputField
            label="Estado Civil"
            value={estadoCivil}
            onChange={setEstadoCivil}
            type="text"
            id="estadoCivil"
            //required
          />
        </div>

        <div className="justify-center flex flex-col space-y-1">
          <h1 className="font-semibold">Dados Socioeconômicos</h1>
          <InputField
              label="Profissão"
              value={profissao}
              onChange={setProfissao}
              type="text"
              id="profissao"
              //required
          />
          <InputField
            label="Renda Familiar"
            value={renda}
            onChange={setRenda}
            type="number"
            id="renda"
            //required
          />
          <InputField
            label="Dependentes"
            value={dependentes}
            onChange={setDependentes}
            type="number"
            id="dependentes"
            //required
          />
          <ButtonCadastrar />
        </div>
          
        <div className="flex flex-col space-y-1">
          <h1 className="font-semibold">Contato</h1>
          <InputField
            label="Telefone 1"
            value={telefone1}
            onChange={setTelefone1}
            type="number"
            id="telefone1"
            //required
          />
          <InputField
            label="Telefone 2"
            value={telefone2}
            onChange={setTelefone2}
            type="number"
            id="telefone2"
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
        </div>

        {cadastroRepresentado(isChecked)}
          
      </form>
    </>
  );
}