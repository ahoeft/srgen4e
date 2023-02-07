import React from 'react';
import Card from 'react-bootstrap/Card';
import SkillGroup from './SkillGroup';

class ActiveSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        
    }
    render() {
        const athletics = ["Climbing", "Gymnastics", "Running", "Swimming"]
        return <Card>
            <Card.Title>Active Skills</Card.Title>
            <Card.Body>
                <SkillGroup name="Athletics (Usually Strength)" skills={athletics} />
                <SkillGroup name="Biotech (Usually Logic)" />
                <SkillGroup name="Close Combat (Agility)" />
                <SkillGroup name="Conjuring (Magic)" />
                <SkillGroup name="Cracking (Logic)" />
                <SkillGroup name="Electronics (Logic)" />
                <SkillGroup name="Firearms (Agility)" />
                <SkillGroup name="Influence (Charisma)" />
                <SkillGroup name="Mechanic (Logic)" />
                <SkillGroup name="Outdoors (Usually Intuition)" />
                <SkillGroup name="Sorcery (Magic)" />
                <SkillGroup name="Stealth (Usually Intuition)" />
                <SkillGroup name="Tasking (Resonance)" />
            </Card.Body>
        </Card>
    }
}

export default ActiveSkills;