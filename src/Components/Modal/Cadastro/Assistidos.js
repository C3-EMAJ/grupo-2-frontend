import React, { useState } from 'react';

//Componentes
import { InputField, ButtonCadastrar, CheckboxSimNao, SelectEstadoCivil } from './Items';
import Loader from '../../Loader';

//Hooks personalizados
import { useCadastrarAssistido } from '../../../Services/cadastrarAssistido'
import { useEditarAssistido } from '../../../Services/editarAssistido';

//Validadores
import { validarData, validarEstadoCivil, validarProfessor } from '../../../Utils/validadores';

//Função contendo os componentes necessários para o cadastro de assistidos
export default function Assistidos({assistido}) {

  const {cadastrarAssistido, cadastrando} = useCadastrarAssistido();
  const {editarAssistido, editando} = useEditarAssistido();

  //Dados Pessoais
  const [name, setName] = useState(assistido ? assistido.name : "")
  const [cpf, setCpf] = useState(assistido ? assistido.cpf : "")
  const [rg, setRg] = useState(assistido ? assistido.rg : "")
  const [dataNasc, setDataNasc] = useState(assistido ? assistido.dataNasc : "")
  const [isChecked, setIsChecked] = useState(false);
  const [estadoCivil, setEstadoCivil] = useState(assistido ? assistido.estadoCivil : "")
  
  //Contato
  const [telefone1, setTelefone1] = useState(assistido ? assistido.telefone1 : "")
  const [telefone2, setTelefone2] = useState(assistido ? assistido.telefone2 : "")
  const [email, setEmail] = useState(assistido ? assistido.email : "")
  
  //Dados Socioeconômicos
  const [profissao, setProfissao] = useState(assistido ? assistido.profissao : "")
  const [renda, setRenda] = useState(assistido ? assistido.renda : "")
  const [dependentes, setDependentes] = useState(assistido ? assistido.dependentes : "")
  
  //Dados pessoais do representado (caso tenha)
  const [nameRepresentado, setNameRepresentado] = useState("")
  const [cpfRepresentado, setCpfRepresentado] = useState("")
  const [rgRepresentado, setRgRepresentado] = useState("")
  const [dateRepresentado, setDateRepresentado] = useState("")
  const [estadoCivilRepresentado, setEstadoCivilRepresentado] = useState("")

  //função que faz a requisição para submeter o formulário
  const handleSubmit = async(event) => {
    event.preventDefault();

    //objeto contendo as informações do representado (caso tenha)
    const dataRepresentado = { nameRepresentado, cpfRepresentado, rgRepresentado, dateRepresentado, estadoCivilRepresentado };
    //objeto contendo ad informações do assistido
    const data = { name, cpf, rg, dataNasc, estadoCivil, telefone1, telefone2, email, profissao, renda, dependentes, dataRepresentado: isChecked ? dataRepresentado : null };
    //se caso não for marcada a opção de cadastrar representado então dataRepresentado não é enviado no objeto
    isChecked ? console.log("possui representado") : delete data.dataRepresentado;
    console.log(data);

    //dados para comparar o que está preenchido
    const required = ['name', 'cpf', 'rg', 'date', 'estadoCivil', 'telefone1']
    const requiredRepresentado = ['nameRepresentado', 'cpfRepresentado', 'rgRepresentado', 'dateRepresentado', 'estadoCivilRepresentado']

    // Pelo menos um dos campos é uma string vazia, exiba um alerta na tela.
    if (!validarData(data, required)){
      return alert("Todos os dados pessoais e pelo menos o Telefone 1 são necessários!")
    }

    //Validando se o estado civil está preenchido corretamente
    if (!validarEstadoCivil(data.estadoCivil)){
      return
    }

    //Dados do representado (caso tenha) verificados se foram preenchidos
    if (isChecked) {
      if (!validarData(dataRepresentado, requiredRepresentado)) {
        return alert("Se a opção Cadastrar Representado estiver marcada é necessário o preenchimento dos dados do representado!");
      }
      if(!validarEstadoCivil(dataRepresentado.estadoCivilRepresentado)){
        return
      }
    }
    
    //Se o assistido foi selecionado para edição então chama o hook de edição de assistido
    if (assistido) {
      //console.log(data)
      if (!validarProfessor(localStorage.getItem("role"))){
        return
      }
      await editarAssistido(data)
      window.location.reload();
    }

    //Se não, então chama o hook de cadastrar um novo assistido
    else{
      //console.log(data)
      await cadastrarAssistido(data);
      window.location.reload();
    }
  
}

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
          <SelectEstadoCivil
            label="Estado Civil"
            onChange={setEstadoCivilRepresentado}
            id="estadoCivilRepresentado"
            />
        </div>
      ); 
    }
  }

  //Componentes referentes ao cadastro de assistidos
  return (
    <>
      {cadastrando || editando ? <Loader /> : null}
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
            value={dataNasc}
            onChange={setDataNasc}
            type="date"
            id="date"
            //required
          />
          <SelectEstadoCivil
            label="Estado Civil"
            onChange={setEstadoCivil}
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
          <ButtonCadastrar label={assistido ? "Editar" : "Cadastrar"}/>
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
