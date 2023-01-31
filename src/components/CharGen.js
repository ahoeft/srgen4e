import React from 'react';
import Attributes from './Attributes';
import ActiveSkills from './ActiveSkills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KnowledgeSkills from './KnowledgeSkills';

class CharGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            buildPoints: 400
        };
        
    }
    updateBp = (bpCost) => {
        var newBP = this.state.buildPoints + bpCost;

        this.setState({buildPoints: newBP});
    }

    
    render() {
        return <Container>
        <Row>
          <Col><div>Remaining BP:{ this.state.buildPoints}</div><Attributes updateBp={this.updateBp} /></Col>
          <Col><ActiveSkills updateBp={this.updateBp} /> </Col>
          <Col><KnowledgeSkills /></Col>
        </Row>
      </Container>
    }
}

export default CharGen;