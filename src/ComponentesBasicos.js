import React from 'react';
import './App.css';

function BotaoAmarelo(props) {
    return (
        <div>
          <button type="button" className="btn btn-warning margem-pequena margem-bottom"
         onClick={() => props.onClick()}>
         { props.mensagem }
          </button>
        </div>
    )
}

function BotaoVerde(props) {
    return (
        <div>
          <button type="button" className="btn btn-success margem-pequena botao-largo margem-botao-verde"
         onClick={() => props.onClick()}>
         { props.mensagem }
          </button>
        </div>
    )
}

export default BotaoAmarelo;
export {BotaoVerde, BotaoAmarelo};