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
        const biotech = ["Cybertechnology", "First Aid", "Medicine"]
        const closecombat = ["Blades", "Clubs", "Unarmed Combat"]
        const conjuring = ["Banishing", "Binding", "Summoning"]
        const cracking = ["Cybercombat", "Electronic Warfare", "Hacking"]
        const electronics = ["Computer", "Data Search", "Hardware", "Software"]
        const firearms = ["Automatics", "Longarms", "Pistols"]
        const influence = ["Con", "Etiquette", "Leadership", "Negotiation"]
        const mechnic = ["Aeronautics Mechanic", "Automotive Mechanic", "Industrial Mechanic", "Nautical Mechanic"]
        const outdoors = ["Navigation", "Survival", "Tracking"]
        const sorcery = ["Counterspelling", "Ritual Spellcasting", "Spellcasting"]
        const stealth = ["Disguise", "Infiltration", "Palming", "Shadowing"]
        const tasking = ["Compiling", "Decompiling", "Registering"]
        return <Card>
            <Card.Title>Active Skills</Card.Title>
            <Card.Body>
                <SkillGroup name="Athletics (Usually Strength)" skills={athletics} updateSkill={this.updateSkill} />
                <SkillGroup name="Biotech (Usually Logic)" skills={biotech} updateSkill={this.updateSkill} />
                <SkillGroup name="Close Combat (Agility)" skills={closecombat} updateSkill={this.updateSkill} />
                <SkillGroup name="Conjuring (Magic)" skills={conjuring} updateSkill={this.updateSkill} />
                <SkillGroup name="Cracking (Logic)" skills={cracking} updateSkill={this.updateSkill} />
                <SkillGroup name="Electronics (Logic)" skills={electronics} updateSkill={this.updateSkill} />
                <SkillGroup name="Firearms (Agility)" skills={firearms} updateSkill={this.updateSkill} />
                <SkillGroup name="Influence (Charisma)" skills={influence} updateSkill={this.updateSkill} />
                <SkillGroup name="Mechanic (Logic)" skills={mechnic} updateSkill={this.updateSkill} />
                <SkillGroup name="Outdoors (Usually Intuition)" skills={outdoors} updateSkill={this.updateSkill} />
                <SkillGroup name="Sorcery (Magic)" skills={sorcery} updateSkill={this.updateSkill} />
                <SkillGroup name="Stealth (Usually Intuition)" skills={stealth} updateSkill={this.updateSkill} />
                <SkillGroup name="Tasking (Resonance)" skills={tasking} updateSkill={this.updateSkill} />
            </Card.Body>
        </Card>
    }
}

export default ActiveSkills;