import React from 'react';
import Card from 'react-bootstrap/Card';

class SkillGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : props.name
        };
        
    }
    render() {
        return <Card>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Body>A list of skills will go here</Card.Body>
        </Card>
    }
}

export default SkillGroup;