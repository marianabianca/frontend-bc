import React, { Component } from 'react';
import axios from 'axios';
import Block from './Block'
import {PageTitle} from "./BasicComponents"

class EspecificBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: undefined,
            block: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getCall (index) {
        axios.get('http://localhost:81/blockchain/block/' + index)
        .then(response =>  this.setState(
            {index: response.data.index,
            block: response.data}
        ))
    }

    render() {
        const index = undefined;
        
        return (
            <div>
                <PageTitle title="Get especific block" />
                <form className="input-group mx-auto col-5 mb-5" onSubmit={this.handleSubmit}>
                    <input type="number" min="0" className="form-control" placeholder="Block index" value={index} onChange={this.handleChange}/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary">Get block</button>
                    </div>
                </form>
                {this.state.block !== undefined && this.state.block.hash !== null && <Block block={this.state.block} handleAddBlock={()=>{}}/>}
                {this.state.block !== undefined && this.state.block.hash === null && 
                    <div className="alert alert-danger top-margin">
                        This block does not exist, please enter a lower number
                    </div>
                }
            </div>
        )
    }

    handleChange(e) {
        this.setState({index: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getCall(this.state.index);
    }
}

export default EspecificBlock;
