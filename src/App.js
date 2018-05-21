import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';
import FormPost from './Form';
import {BotaoAmarelo, BotaoVerde} from './ComponentesBasicos';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bla: true,
      nome: "mariana",
      bc: [],
      atualizado: true,
    }
  }

  componentDidMount () {
    this.getCall()
  }

  getCall () {
    axios.get('http://localhost:81/')
      .then(
        response => this.setState(
          {bc: response.data,
          atualizado: true,},
        )
      )
  }

  putCall () {
    axios.put('http://localhost:81/blockchain/closeblock') // TODO pedir pra retornar os blocos
      .then(
        response => this.setState(
            {atualizado: false}
        )
      )
  }

  postCall (obj) {
    axios.post('http://localhost:81/blockchain', obj)
      .then(
        response => this.setState(
            {atualizado: false}
        )
      )  
  }

  render() {
    const blocos = this.state.bc;
    
    return (
      <div className="App">
        <div className="container">
          <FormPost submit={(valores) => this.postCall(valores)}/>

          <BotaoAmarelo onClick={() => this.putCall()} mensagem="Close block"/>

          {!this.state.atualizado && <BotaoVerde onClick={() => this.getCall()} mensagem="Refresh"/>}

          {blocos.map(bloco => <Tabela bloco={bloco} />)}
        </div>
      </div>
    );
  }
}


export default App;
