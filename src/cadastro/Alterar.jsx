import React from "react";
import { Link } from "react-router-dom";
import { findCadastroById, updateCadastro } from "../service/CadastroService";

class AlterarCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
    }

    initState = () => ({
        id: undefined,
        nick: "",
        email: "",
        idade: "",
        senha: "",
    });

    componentDidMount() {
    const { id } = this.props.match.params;
    this.loadData(id);
    }

    async loadData(id) {
        const resposta_servidor = await findCadastroById(id);
        this.setState({
        id: resposta_servidor.Cadastro.id,
        nick: resposta_servidor.Cadastro.nome,
        email: resposta_servidor.Cadastro.email,
        idade: resposta_servidor.Cadastro.idade,
        senha: resposta_servidor.Cadastro.senha,
        });
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
        [name]: value,
        });
    };

    async handleSubimitCadastro(e) {
        e.preventDefault();

        const {
        id,
        nick,
        email,
        idade,
        senha,
        } = this.state;

        console.log(id);

        let Cadastro = {
            id: id,
            nick: nome,
            email: email,
            idade: idade,
            senha: senha,
        };

        const resposta_servidor = await updateCadastro(Cadastro);

        this.setState(
            {
            state: this.initState(),
            },
            this.listarCadastro()
        );
    }

    listarCadastro = () => {
        this.props.history.push("/Cadastro/listar");
    };

    render() {
        const {
            id,
            nick,
            email,
            idade,
            senha,
        } = this.state;

        return (
            <div className="container pt-5">
                <div className="tile">
                    <div className="tile-body">
                        <form onSubmit={(e) => this.handleSubimitAutor(e)}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="nick" className="control-label">
                                            Nick:
                                        </label>
                                        <input
                                            type="text"
                                            name="nick"
                                            value={nick}
                                            onChange={(e) => this.onChange(e)}
                                            id="nick"
                                            className="form-control "
                                            className={formValidation.validNick === true ? "form-control is-invalid" : "form-control"}
                                        />
                                        {
                                            formValidation.validNick && (
                                                <div className="invalid-feedback">
                                                    {
                                                        formValidation.nick.map((erro, index) => {
                                                            return (
                                                                <p key={index} style={{ margin: "0" }}>
                                                                    <span>{erro}</span>
                                                                </p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="email" className="control-label">
                                            E-mail:
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={email}
                                            onChange={(e) => this.onChange(e)}
                                            id="email"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="idade" className="control-label">
                                            Idade:
                                        </label>
                                        <input
                                            type="text"
                                            name="idade"
                                            value={idade}
                                            onChange={(e) => this.onChange(e)}
                                            id="idade"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="senha" className="control-label">
                                            Senha:
                                        </label>
                                        <input
                                            type="text"
                                            name="senha"
                                            value={senha}
                                            onChange={(e) => this.onChange(e)}
                                            id="senha"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="center">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg" 
                                    title="Incluir novo Registro"
                                >
                                    Salvar Dados do Cadastro
                                </button>
                                <Link 
                                    to="/Cadastro/listar"  
                                    className="btn btn-secondary btn-lg ml-3" 
                                    title="Cancelar a Inclusão"
                                >
                                    Cancelar Inclusão do Cadastro
                                </Link>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlterarCadastro;