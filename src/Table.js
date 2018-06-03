import React from 'react';

function Table(props){
    return (
        <table className="table table-striped negative-mb">
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
              {props.transactions.map(transaction =>    
                  <tr>
                    <td>{transaction.hash}</td>
                    <td>{transaction.sender}</td>
                    <td>{transaction.receiver}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.timestamp}</td>
                  </tr>
                )
              }
            </tbody>
        </table>
    )
}

export default Table;