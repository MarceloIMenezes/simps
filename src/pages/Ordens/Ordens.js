import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom"
export default class Ordens extends React.Component {
    constructor(props) {
        super(props);

        this.preco = [];
        
        this.state = {
            ordens: this.props.ordens,
            descricao: "",
            MasterChecked: false,
            ordensSelecionados: [],
            descricao: []
        };
        
            for (let i=0; i<this.state.ordens.length; i++) {
                let precoAux = 0;
                for (var j=0; j<this.state.ordens[i].servicosSelecionados.length; j++) {
                    precoAux += parseInt(this.state.ordens[i].servicosSelecionados[j].preco);
                }
                this.preco.push(precoAux);
            }
    }

    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempordens = this.state.ordens;
        // Check/ UnCheck All Items
        tempordens.map((servico) => (servico.selected = e.target.checked));

        //Update State
        this.setState({
        MasterChecked: e.target.checked,
        ordens: tempordens,
        ordensSelecionados: this.state.ordens.filter((e) => e.selected),
        });
    }

    // Update ordens Item's state and Master Checkbox State
    onItemCheck(e, item) {
        let tempordens = this.state.ordens;
        tempordens.map((ordem) => {
        if (ordem === item) {
            ordem.selected = e.target.checked;
        }
        return ordem;
        });

        //To Control Master Checkbox State
        const totalordens = this.state.ordens.length;
        const totalConfirmados = tempordens.filter((e) => e.selected).length;

        // Update State
        this.setState({
        MasterChecked: totalordens === totalConfirmados,
        ordens: tempordens,
        ordensSelecionados: this.state.ordens.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
    getSelectedRows() {
        this.setState({
            ordensSelecionados: this.state.ordens.filter((e) => e.selected),
        });
        let tempOrdensSel = this.state.ordensSelecionados;
        let tempordens = this.state.ordens;
        tempOrdensSel.map((ordemSel) => {
            tempordens.map((ordem, idx) => {
            if (ordem === ordemSel) {
                tempordens.splice(idx, 1);
            }
            });     
        });
        this.setState({
            ordens: tempordens
        });
    }

    handleChange(target, idx) {
        var descAux = this.state.descricao;
        descAux[idx] = target.value;
        this.setState({
            descricao: descAux
        });
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
                    <th>Ordem #</th>
                    <th>Cliente</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.ordens.map((ordem, idx) => (
                    <tr key={idx + 1} className={ordem.selected ? "selected" : ""}>
                        <th scope="row">
                        <input
                            type="checkbox"
                            checked={ordem.selected}
                            onChange={(e) => this.onItemCheck(e, ordem)}
                        />
                        </th>
                        <td>{idx + 1}</td>
                        <td>{ordem.cliente.nome}</td>
                        <td>
                            <input
                                className={styles.inputOrdens}                      
                                type="text"
                                name="descricao"
                                value={this.state.descricao[idx]}
                                onChange={e => this.handleChange(e.target, idx)}/>
                        </td>
                        <td>{this.preco[idx]}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <button
                    className={styles.concluiOrdem}
                    onClick={() => this.getSelectedRows()}>
                    Concluir Ordens Selecionadas: {this.state.ordensSelecionados.length} 
                </button>
            </div>
            </div>
        </div>
        );
    }
}