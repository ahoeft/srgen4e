import React from 'react';
import Card from 'react-bootstrap/Card';
import ActiveSkill from './ActiveSkill';

class SkillGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : props.name,
            skills : props.skills
        };
        
    }

    updateSkill = (bpCost) => {
        this.props.updateSkill(bpCost);
    }

    render() {
        var mySkills = []; 
        if(this.state.skills)
        {
            mySkills = this.state.skills;
        }

        return <Card>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Body>{mySkills.map(skillName => <ActiveSkill name={skillName} updateSkill={this.updateSkill}></ActiveSkill>)}</Card.Body>
        </Card>
    }
}

export default SkillGroup;