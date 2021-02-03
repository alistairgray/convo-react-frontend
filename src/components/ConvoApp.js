import React from 'react';
import '../index.css';
import PlayerChat from './PlayerChat';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class ConvoApp extends React.Component {


    render() {
  
      return (
        <div>
          <Container>
            <Row>
              <Col sm={7}>
              <header>
                <h1>Convo</h1>
                <h4>Practice networking conversations on the fly</h4>
              </header>
              </Col>

              <div className="chat" >
                <PlayerChat scenarioTrees={this.props.scenarioTrees.tutorial}/>
              </div>
            </Row>
              <footer>
                <hr />
                Created by Alistair Gray 2021 <strong>|</strong> Styled using Bootstrap <strong>|</strong> Watson Interpretation by IBM Watson
              </footer>
              
            </Container>
        
        </div>
      )
    }
};

export default ConvoApp;


