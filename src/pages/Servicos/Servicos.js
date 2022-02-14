import React from "react";
import styles from './styles.module.css'

export default class Servicos extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 0,
            descricao: "",
            preco: "",
            selecionado: false,
            servicosLocal: this.props.servicos
        };
    }
    
    handleChange(target) {
        this.setState({
            [target.name]: target.value
        });
    }

    verifica() {
        if (!this.state.descricao) {
            alert("Insira uma descrição.");
            return;
        }
        this.state.id = this.state.id + 1;
        if (!this.state.preco) {
            this.state.preco = 0; 
        }
        this.props.servicos.push(this.state);

        this.setState({
            id: this.state.id,
            descricao: "",
            preco: 0,
            servicosLocal: this.props.servicos
        });
    }

    renderLinhas() {
        var ctx = this;

        this.state.servicosLocal.map(function(servico, idx) {
            const {
                id,
                descricao,
                preco
            } = servico;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{descricao}</td>
                    <td>{preco}</td>
                    <td>
                        <button
                            onClick={e => ctx.deletar.bind(ctx, idx)}>
                            deletar
                        </button>
                    </td>
                </tr>
            );
        })

    }

    deletar(id) {
        var servicos = this.props.servicos;

        servicos.splice(id-1, 1);
        this.setState({
            servicosLocal: servicos
        });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.servico}>Serviço #</th>
                            <th className={styles.descricao}>Descrição do Serviço</th>
                            <th className={styles.servico}>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.servicos.map(function(servico, idx) {
                            const {
                                id,
                                descricao,
                                preco
                            } = servico;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{descricao}</td>
                                    <td>{preco}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <input
                    className={styles.inputServico} 
                    type="text"
                    name="descricao"
                    placeholder="Descrição do Serviço"
                    value={this.state.descricao}
                    onChange={e => this.handleChange(e.target)}
                />
                <input 
                    className={styles.inputServico}
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    value={this.state.preco}
                    onChange={e => this.handleChange(e.target)} 
                />
                <button 
                    className={styles.adicionaButton}
                    type="submit" 
                    onClick={e => this.verifica()}
                >
                    Adicionar Serviço
                </button>
            </div>
        );
    }
}