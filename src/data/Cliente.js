import React from "react";
import styles from "../data/styles.module.css"
import {Link} from "react-router-dom"

export default class Cliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            endereco: "",
            bairro: "",
            cidade: "",
            uf: "",
            cep: "",
            cpf: "",
            email: "",
            tel: ""
        };
    }

    handleChange(target) {
        this.setState({
            [target.name]: target.value
        });
    }

    alerta() {
        if (!this.valid()) {
            alert("Preencha todos os campos.");
        }
    }

    valid() {
        const {
            nome,
            endereco,
            bairro,
            cidade,
            uf,
            cep,
            cpf,
            email,
            tel
        } = this.state;

        return nome && endereco &&
            bairro && cidade && uf
            && cep && cpf && email
            && tel;
    }
    
    render() {
        return (
            <form>
                <input
                    className={styles.bigInput}
                    type="text"
                    name="nome"
                    placeholder="Nome Completo"
                    value={this.state.nome}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    className={styles.bigInput}
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    value={this.state.endereco}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input
                    className={styles.mediumInput} 
                    type="text"
                    name="bairro"
                    placeholder="Bairro"
                    value={this.state.bairro}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input
                    className={styles.mediumInput} 
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={this.state.cidade}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    className={styles.smallInput}
                    type="text"
                    name="uf"
                    placeholder="UF"
                    value={this.state.uf}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    type="text"
                    name="cep"
                    placeholder="CEP"
                    value={this.state.cep}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={this.state.cpf}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <input 
                    type="tel"
                    name="tel"
                    placeholder="Telefone"
                    value={this.state.tel}
                    onChange={e => this.handleChange(e.target)}
                required/>
                <Link to={this.valid() ? "selecionar-servicos" : "#"} >
                    <button className={styles.confirmaButton} type="submit" onClick={e => this.alerta()}>
                        Confirmar
                    </button>
                </Link>
            </form>
        );
    }
}