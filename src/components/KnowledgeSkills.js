import React from 'react';
import Card from 'react-bootstrap/Card';

class KnowledgeSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        
    }
    render() {
        return <Card>
            <Card.Title>Knowledge Skills</Card.Title>
            <Card.Body>skills go here</Card.Body>
        </Card>

    }
}

export default KnowledgeSkills;