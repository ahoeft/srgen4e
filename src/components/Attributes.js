import React from 'react';
import Attribute from './Attribute';
import Card from 'react-bootstrap/Card';

class Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            buildPoints: 400
        };
        
    }
    updateAttribute = (bpCost) => {
        var newBP = this.state.buildPoints + bpCost

        this.setState({buildPoints: newBP})
    }

    
    render() {
        return <Card style={{ width: '18rem', textAlign: 'left'}}>
            <Card.Title>Attributes</Card.Title>
            <Card.Body>
                <div>{this.state.buildPoints}</div>
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Physical</Card.Title>
                    <Card.Body>
                        <Attribute updateAttribute={this.updateAttribute} name="Agility"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Body"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Reaction"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Strength"/>
                    </Card.Body>
                </Card>             
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Mental</Card.Title>
                    <Card.Body>
                        <Attribute updateAttribute={this.updateAttribute} name="Charisma"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Intuition"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Logic"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Willpower"/>
                    </Card.Body>
                </Card>
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Special</Card.Title>
                    <Card.Body>
                        <Attribute updateAttribute={this.updateAttribute} name="Edge"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Essence"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Initiative"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Magic"/>
                        <Attribute updateAttribute={this.updateAttribute} name="Resonance"/>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    }
}

export default Attributes;