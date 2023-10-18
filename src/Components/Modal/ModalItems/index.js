import React, { Component } from 'react'

function InputField({ label, value, onChange, type, id, required }) {
  return (
    <div className="flex flex-col text-sm">
      <label class="" htmlFor={id}>{label}</label>
      <input
        className="border rounded-lg w-3/4"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        id={id}
        required={required}
      />
    </div>
  );
}

function ButtonCadastrar() {
  return (
    <div class="pt-5">
      <button type="submit" class="w-1/3 bg-orange text-sm rounded p-1 text-white hover:scale-110">
          Cadastrar
      </button>
    </div>
  );
}

class CheckboxSimNao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selecionado: false
    };
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      selecionado: !prevState.selecionado
    }));
  }

  render() {
    return (
      <div class="text-black text-sm">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-4 w-4" checked={this.state.selecionado} onChange={this.handleCheckboxChange} />
          <span className="ml-2">Sim</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input type="checkbox" className="form-checkbox h-4 w-4 " checked={!this.state.selecionado} onChange={this.handleCheckboxChange} />
          <span className="ml-2">Não</span>
        </label>
      </div>
    );
  }
}

export {InputField, ButtonCadastrar, CheckboxSimNao};