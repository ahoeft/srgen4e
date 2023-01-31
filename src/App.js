import './App.css';
import Attributes from './components/Attributes';
import ActiveSkills from './components/ActiveSkills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KnowledgeSkills from './components/KnowledgeSkills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>
          <Container>
            <Row>
              <Col><Attributes /></Col>
              <Col><ActiveSkills /> <KnowledgeSkills /></Col>
            </Row>
          </Container>
          
        </code>
      </header>
    </div>
  );
}

export default App;
