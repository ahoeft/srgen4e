import React from 'react';
import Button from 'react-bootstrap/Button';

class ActiveSkill extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : props.name,
            value : 0
        };
        
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