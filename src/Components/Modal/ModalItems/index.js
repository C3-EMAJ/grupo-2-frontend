import React, { Component } from 'react'


function DigitarInfo({id, type}) {
  return (
    <div>
        <label>
            <p class="text-sm my-1">
              {id}
            </p>
            <input type={type} className="text-sm w-5/6 border hover:border-2 border-black rounded" />
        </label>
    </div>
  );
}


function ButtonCadastrar({id}) {
  return (
    <div>
        <button type="submit" id={id} class="mt-6 bg-orange text-sm rounded p-1 text-white hover:scale-110">
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

export {DigitarInfo, ButtonCadastrar, CheckboxSimNao};