import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cliente from './pages/Cliente/Cliente'
import Produto from './pages/Produto/Produto'
import Categoria from './pages/Categoria/Categoria'

import ClienteLista from './pages/ClienteLista/ClienteLista'

import Funcionario from './pages/Funcionario/Funcionario'
import FuncionarioLista from './pages/Funcionario/ListarFuncionario/ListarFuncionario'
import FuncionarioEncontrar from './pages/Funcionario/EncontrarFuncionario/FuncionarioEncontrar'
import FuncionarioDeletar from './pages/Funcionario/DeletarFuncionario/FuncionarioDeletar'
import FuncionarioAtualizar from './pages/Funcionario/AtualizarFuncionario/AtualizarFuncionario'
import FuncionarioCadastrar from './pages/Funcionario/CadastroFuncionario/FuncionarioCadastrar'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Cliente" component={Cliente} />
      <Route path="/Produto" component={Produto} />
      <Route path="/Categoria" component={Categoria} />
      <Route path="/Lista" component={ClienteLista} />

      <Route path="/Funcionario" component={Funcionario} />
      <Route path="/ListarFuncionario" component={FuncionarioLista} />
      <Route path="/EncontrarFuncionario" component={FuncionarioEncontrar} />
      <Route path="/DeletarFuncionario" component={FuncionarioDeletar} />
      <Route path="/AtualizarFuncionario" component={FuncionarioAtualizar} />
      <Route path="/CadastrarFuncionario" component={FuncionarioCadastrar} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
