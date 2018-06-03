import React, { Component } from 'react';
import axios from 'axios';
import Block from './Block'
import {PageTitle} from "./BasicComponents"

class LastBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block: undefined
        }
    }

    componentDidMount () {
        this.getAllBlocks();
    }

    getAllBlocks () {
        axios.get('http://localhost:81/')
            .then(response => this.getLastBlock(response.data.length-1))
    }

    getLastBlock (index) {
        axios.get('http://localhost:81/blockchain/block/' + index)
           .then(response =>  this.setState({block: response.data}))
    }

    render() {
        return (
            <div>
                <PageTitle title="Last Block" />
                {this.state.block !== undefined && <Block block={this.state.block} handleAddBlock={()=>{}} />}
            </div>
        )
    }
}

export default LastBlock;