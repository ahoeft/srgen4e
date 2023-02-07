import React from 'react';
import Card from 'react-bootstrap/Card';
import SkillGroup from './SkillGroup';

class ActiveSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        
    }

    updateSkill = (bpCost) => {
        this.props.updateBp(bpCost);
    }

    render() {
        const athletics = ["Climbing", "Gymnastics", "Running", "Swimming"]
        return <Card>
            <Card.Title>Active Skills</Card.Title>
            <Card.Body>
                <SkillGroup name="Athletics (Usually Strength)" skills={athletics} updateSkill={this.updateSkill} />
                <SkillGroup name="Biotech (Usually Logic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Close Combat (Agility)" updateSkill={this.updateSkill} />
                <SkillGroup name="Conjuring (Magic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Cracking (Logic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Electronics (Logic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Firearms (Agility)" updateSkill={this.updateSkill} />
                <SkillGroup name="Influence (Charisma)" updateSkill={this.updateSkill} />
                <SkillGroup name="Mechanic (Logic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Outdoors (Usually Intuition)" updateSkill={this.updateSkill} />
                <SkillGroup name="Sorcery (Magic)" updateSkill={this.updateSkill} />
                <SkillGroup name="Stealth (Usually Intuition)" updateSkill={this.updateSkill} />
                <SkillGroup name="Tasking (Resonance)" updateSkill={this.updateSkill} />
            </Card.Body>
        </Card>
    }
}

export default ActiveSkills;