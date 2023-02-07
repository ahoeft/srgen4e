import React from 'react';
import Button from 'react-bootstrap/Button';

class ActiveSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : props.name,
            value : 0
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
    }

    handleAdd() {
        var current = this.state.value;
        var bpCost = 0;
        var newVal = current;
        if((current + 1) <= 6) {
            newVal = current + 1;
            bpCost = -4;
        }
        this.setState({value: newVal});
        this.props.updateSkill(bpCost);
    }

    handleSubtract() {
        var bpCost = 0;
        var current = this.state.value;
        var newVal = 0;
        if((current - 1) > 0) {
            newVal = current - 1;
            bpCost = 4;
        }

        this.setState( {value: newVal});
        this.props.updateAttribute(bpCost);
    }

    render() {
        return <div>
            {this.state.name} : {this.state.value}
            <Button onClick={this.handleAdd} variant="outline-success" >+</Button>
            <Button onClick={this.handleSubtract} variant="outline-success" >-</Button>
        </div>
    }

}

export default ActiveSkill;