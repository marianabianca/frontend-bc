import React, { Component } from 'react';
import axios from 'axios';
import Block from './Block'
import {PageTitle} from "./BasicComponents";

class AllBlocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: []
        }
    }

    componentDidMount () {
        this.getAllBlocks()
    }
    
    getAllBlocks () {
        axios.get('http://localhost:81/')
        .then(response =>  this.setState(
                {blocks: response.data}
        ))
    }

    handleAddBlock() {
        let newBlock = {
            hash: "",
            index: this.state.blocks.length,
            transactions: []
        };
        this.setState(prevState => ({
            blocks: prevState.blocks.concat(newBlock),
        }));
    }

    render() {
        const blocks = this.state.blocks;

        return (
            <div>
                <PageTitle title="All blocks" />
                {blocks.map(block => <Block block={block} handleAddBlock={() => this.handleAddBlock()}/>)}
            </div>
        );
    }
}

export default AllBlocks;
