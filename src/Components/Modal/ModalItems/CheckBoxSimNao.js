import React, { Component } from 'react';

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

export default CheckboxSimNao;
