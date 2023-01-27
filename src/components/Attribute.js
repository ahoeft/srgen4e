import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Attribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0,
            name: props.name
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd() {
        var current = this.state.value;
        var newVal = current;
        if((current + 1) <= 6) {
            newVal = current + 1;
        }
        this.setState({value: newVal});
    }

    handleSubtract() {
        var current = this.state.value;
        var newVal = 0;
        if((current - 1) >= 0) {
            newVal = current - 1;
        }

        this.setState( {value: newVal});
    }

    render() {
        return <div>
            {this.state.name} : {this.state.value}
            <Button onClick={this.handleAdd} variant="outline-success" >+</Button>
            <Button onClick={this.handleSubtract} variant="outline-success" >-</Button>
        </div>
    }
}

export default Attribute;