import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { findAllCadastros } from "../service/CadastroService";

class listarCadastro extends Component {
  constructor() {
    super();
    this.state = this.initState();
    this.setNumberPaginaAtual = this.setNumberPaginaAtual.bind(this);
  }

  initState = () => ({
    cadastros: [],
    paginaAtual:1,
    pageSize:5,
    dir:'asc',
    props:'id',
    total:0,
    paginaFim:0,
    search:'',
  });

  componentDidMount() {
    this.loadData();
  }

 async loadData(){
    const { paginaAtual, pageSize, dir, asc, search} = this.state;
    const cadastros = await findAllUsers(paginaAtual,pageSize,dir,asc,search);
    this.setState({
      cadastros: cadastros.data,
      paginaAtual:cadastros.paginaAtual,
      pageSize:cadastros.pageSize,
      paginaFim:cadastros.paginaFim,
      total:cadastros.total,
    });
  }

  render() {
    const { cadastros, paginaAtual, pageSize, paginaFim, total } = this.state;
    
    return (
        <div>
        <div className="container">
          <div className="app-title">
            <h1>
              <i className="fa fa-edit">Lista de cadastros</i>
            </h1>
            <ul className="app-breadcrumb breadcrumb">
              <li className="breadcrumb-item">
                <i className="fa fa-search fa-lg"></i>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Menu Principal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="tile">
            <div className="tile-body">
              <div id="no-more-tables">
                <table className="table table-striped table-bordered table-hover cf ">
                  <thead className="cf">
                        <tr>
                          <td>Id</td>
                          <td>Nick</td>
                          <td>E-mail</td>
                          <td>Idade</td>
                          <td>Senha</td>                         
                          </tr>
                  </thead>
                  <tbody>
                    {cadastros.map( (Cadastro) => (
                    <tr key={Cadastro.id}>
                      <td>{ Cadastro.id }</td>
                      <td>{ Cadastro.nome }</td>
                      <td>
                          <Link className="btn btn-info btn-sm" to={`/Cadastro/alterar/${Cadastro.id}`}>
                            <i className="fa fa-pencil"></i>
                          </Link>
                        <a className="btn btn-danger btn-sm" href="#">
                          <i className="fa fa-trash"></i>
                        </a>
                        <a className="btn btn-warning btn-sm" href="#">
                          <i className="fa fa-address-book"></i>
                        </a>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                <Paginacao paginaAtual={paginaAtual}
                           pageSize={pageSize}
                           paginaFim={paginaFim}
                           total={total}
                           setRenderPaginaCorrente={(pagina) => this.setNumberPaginaAtual(pagina)}/>
                <Link className="btn btn-success btn-lg" to="/Cadastro/inserir" title="Incluir novo Registro">
                  <i className="fa fa-plus-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default listarCadastro;