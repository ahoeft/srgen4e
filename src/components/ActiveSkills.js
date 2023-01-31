import React from 'react';
import Card from 'react-bootstrap/Card';

class ActiveSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        
    }
    render() {
        return <Card>
            <Card.Title>Active Skills</Card.Title>
            <Card.Body>skills go here</Card.Body>
        </Card>

    }
}

export default ActiveSkills;