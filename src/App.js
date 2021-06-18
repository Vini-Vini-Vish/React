import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from "react-router-dom";

import './App.css';

import Listacadastro from './cadastro/Listar';


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro/listar" exact component={Listacadastro}/>
            <Route path="/cadastro/incluir" exact component={Cadastrocadastro}/>
            <Route path="/cadastro/alterar/:id" exact component={Cadastrocadastro}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
