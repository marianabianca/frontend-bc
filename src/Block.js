import React, { Component } from 'react';
import axios from 'axios';
import Button from './BasicComponents';
import Table from './Table';

class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.block.index,
            hash: this.props.block.hash,
            transactions: this.props.block.transactions
        }
    }  

    componentWillReceiveProps(nextProps) {
        this.setState({
            index: nextProps.block.index,
            hash: nextProps.block.hash,
            transactions: nextProps.block.transactions
        })
    }

    putCall (obj) {
        console.log(obj);
        axios.put('http://localhost:81/blockchain/closeblock', obj)
        .then((response) => {
            this.props.handleAddBlock();
            this.setState(
                {index: response.data.index,
                hash: response.data.hash,
                transactions: response.data.transactions});
        });
    }

    render() {
        let index = this.state.index;
        let hash = this.state.hash;
        let transactions = this.state.transactions;
        let aux = {index: index};

        return (
            <div className="jumbotron padding-menor margem-topo">
                <BlockInfo index={index} hash={hash} />
                {index} {hash}
                <Table transactions={transactions} />
                {hash === "" && <Button onClick={() => this.putCall(aux)} mensagem="Close block"/>}
            </div>
        )
    }
}

function BlockInfo(props) {
    return (
        <div className="row">
            <div className="alert alert-light col">
                Block {props.index}
            </div>
            {props.hash !== "" && 
                <div className="alert alert-secondary col-9">
                    hash: {props.hash}
                </div>
            }
        </div>
    )
}


export default Block;