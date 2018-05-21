import React from 'react';
import './App.css';

function Tabela(props){
    return (
      <div className="jumbotron padding-menor margem-topo">  
        <h4>{props.bloco.index}</h4> 
        {/* TODO TA DANDO PROBLEMA */}
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Hash</th>
                <th scope="col">Sender</th>
                <th scope="col">Receiver</th>
                <th scope="col">Amout</th>
                <th scope="col">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {props.bloco.transactions.map(transaction =>    
              <tr>
                <th scope="row">{transaction.hash}</th>
                <td>{transaction.sender}</td>
                <td>{transaction.receiver}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.timestamp}</td>
              </tr>
              )
              }
            </tbody>
        </table>
      </div>
    )
}

export default Tabela;