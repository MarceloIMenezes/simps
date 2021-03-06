import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom"
export default class SelecionaServico extends React.Component {
  constructor(props) {
    super(props);
    this.clientes = this.props.cliente;
    this.state = {
      servicos: this.props.servicos,
      MasterChecked: false,
      servicosSelecionados: [],
      cliente: this.clientes[this.clientes.length - 1],
      selected: false,
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempservicos = this.state.servicos;
    // Check/ UnCheck All Items
    tempservicos.map((servico) => (servico.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      servicos: tempservicos,
      servicosSelecionados: this.state.servicos.filter((e) => e.selected),
    });
  }

  // Update servicos Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempservicos = this.state.servicos;
    tempservicos.map((servico) => {
      if (servico.id === item.id) {
        servico.selected = e.target.checked;
      }
      return servico;
    });

    //To Control Master Checkbox State
    const totalServicos = this.state.servicos.length;
    const totalConfirmados = tempservicos.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalServicos === totalConfirmados,
      servicos: tempservicos,
      servicosSelecionados: this.state.servicos.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    var tamanho = this.state.servicosSelecionados.length;
    
    this.setState({
      servicosSelecionados: this.state.servicos.filter((e) => e.selected),
    });
    if (tamanho > 0) {
      this.props.ordens.push(this.state);
    }
  }

  precoTotal() {
      var preco = 0;
      for (var i=0; i<this.state.servicosSelecionados.length; i++) {
        preco += parseInt(this.state.servicosSelecionados[i].preco);
      }
      return preco;
  }

  valid() {
    return (this.state.servicosSelecionados.length > 0)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th>Servi??o #</th>
                  <th>Descri????o</th>
                  <th>Pre??o</th>
                </tr>
              </thead>
              <tbody>
                {this.state.servicos.map((servico) => (
                  <tr key={servico.id} className={servico.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={servico.selected}
                        onChange={(e) => this.onItemCheck(e, servico)}
                      />
                    </th>
                    <td>{servico.id}</td>
                    <td>{servico.descricao}</td>
                    <td>{servico.preco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to={this.valid() ? "/ordens" : "#"} >
              <button
                className={styles.registraOrdem}
                onClick={() => this.getSelectedRows()}>
                Registra Ordem: {this.state.servicosSelecionados.length} 
              </button>
            </Link>
            <div className={styles.preco}>
                Pre??o Total: {this.precoTotal()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}