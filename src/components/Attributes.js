import React, { Component } from 'react';
import Attribute from './Attribute';
import Card from 'react-bootstrap/Card';

class Attributes extends React.Component {
    render() {
        return <Card style={{ width: '18rem', textAlign: 'left'}}>
            <Card.Title>Attributes</Card.Title>
            <Card.Body>
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Physical</Card.Title>
                    <Card.Body>
                        <Attribute name="Agility"/>
                        <Attribute name="Body"/>
                        <Attribute name="Reaction"/>
                        <Attribute name="Strength"/>
                    </Card.Body>
                </Card>             
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Mental</Card.Title>
                    <Card.Body>
                        <Attribute name="Charisma"/>
                        <Attribute name="Intuition"/>
                        <Attribute name="Logic"/>
                        <Attribute name="Willpower"/>
                    </Card.Body>
                </Card>
                <Card style={{margin: '1rem'}}>
                    <Card.Title>Special</Card.Title>
                    <Card.Body>
                        <Attribute name="Edge"/>
                        <Attribute name="Essence"/>
                        <Attribute name="Initiative"/>
                        <Attribute name="Magic"/>
                        <Attribute name="Resonance"/>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    }
}

export default Attributes;