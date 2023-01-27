import React, { Component } from 'react';
import Attribute from './Attribute';

class Attributes extends React.Component {
    render() {
        return <div>
            
            Physical:
            <Attribute name="Agility"/>
            <Attribute name="Body"/>
            <Attribute name="Reaction"/>
            <Attribute name="Strength"/>
            Mental:
            <Attribute name="Charisma"/>
            <Attribute name="Intuition"/>
            <Attribute name="Logic"/>
            <Attribute name="Willpower"/>
            Special:
            <Attribute name="Edge"/>
            <Attribute name="Essence"/>
            <Attribute name="Initiative"/>
            <Attribute name="Magic"/>
            <Attribute name="Resonance"/>
        </div>
    }
}

export default Attributes;