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
    render() {
        var mySkills = []; 
        if(this.state.skills)
        {
            mySkills = this.state.skills;
        }
        return <Card>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Body>{mySkills.map(skillName => <ActiveSkill name={skillName}></ActiveSkill>)}</Card.Body>
        </Card>
    }
}

export default SkillGroup;