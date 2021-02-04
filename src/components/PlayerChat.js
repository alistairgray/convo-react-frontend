import React from 'react';
import '../index.css';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class PlayerChat extends React.Component {
    
    state = {
        botResponse: 'Samantha.AI is helping itself to a cup of coffee when you approach...',
        userHistory: [],
        botHistory: [],
        currentBranch: this.props.scenarioTrees,
        commentary: []
      }
   
       userChoice = (userChoice) => {
            
            const scenario = this.props.scenarioTrees;

            this.setState({
                userHistory: [...this.state.userHistory, this.state.currentBranch[userChoice].userStatement],
                currentBranch: this.state.currentBranch[userChoice],
                botResponse: this.state.currentBranch[userChoice].botResponse,
                commentary: [...this.state.commentary, this.state.currentBranch[userChoice].commentary]
            });

            // perform an axios via a fetch function
            fetchWatson = () => {
                
            }

        } // userChoice()

        handleClickReset = (ev) => {
            ev.preventDefault();
            this.setState({botResponse: 'Samantha.AI is helping itself to a cup of coffee when you approach...'});
            this.setState({userHistory: []});
            this.setState({botHistory: []});
            this.setState({currentBranch: this.props.scenarioTrees});
            this.setState({commentary: []});
        };


    render(){

        const {userHistory, currentBranch, botHistory, commentary} = this.state

        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                        <div className="chatBox">
                            <div className="botChat">
                                
                                <h3>Samantha.AI will respond to your statements</h3>
                            </div>
                            <Card className="mb-3" style={{color: "#000", paddingTop: "1%", paddingLeft: "1%", color: "#6610f2", fontSize: "14pt"}}>
                            <div className="botResponse">
                                <p>{this.state.botResponse}</p>
                            </div>
                            </Card>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <div className="playerChat">
                        <Card className="mb-3" style={{color: "#000"}}>
                            <Card.Body>
                                <Card.Title>
                                    Choose what you think is the right thing to say:
                                </Card.Title>
                            
                        <div className="playerChoices">
                            {
                                Object.keys(currentBranch).map(key => {
                                    const choice = currentBranch[key];
                                    return (
                                        <div onClick={() => this.userChoice(key)}>
                                            <Card.Text><p>{choice.userStatement}</p></Card.Text>
                                        </div>
                                    );
                                })
                            }
                            </div>        
                        </Card.Body>
                        </Card>
                      </div>
                    </Col>
                    <Col>
                    <Card className="mb-3" style={{color: "#000"}}>
                        <Card.Body>
                            <div className="botCommentary">
                                <Card.Title>What You Said:</Card.Title>
                                {
                                    Object.keys(userHistory).map(key => {
                                        const choice = userHistory[key];
                                        return (
                                            <div>
                                                <Card.Text>{userHistory[key]}</Card.Text>
                                            </div>
                                        );
                                    })
                                }                  
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                        <Col>
                        <Card className="mb-3" style={{color: "#000"}}>
                            <div>
                                <Card.Body>
                                    <Card.Title>My Thoughts:</Card.Title>
                                        {
                                        Object.keys(commentary).map(key => {
                                            const choice = commentary[key];
                                            return (
                                                <div>
                                                    <Card.Text>{commentary[key]}</Card.Text>
                                                </div>
                                            );
                                        })
                                        }
                                </Card.Body>
                            </div>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="mb-3" style={{color: "#000"}}>
                            <div>
                                <Card.Body>
                                    <Card.Title>IBM Watson's Thoughts:</Card.Title>
                                        <Card.Text>IBM Data</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                    <Col xs={12}></Col>
                        <Col xs={{order: 12}}>
                            <Button className="reset" onClick={this.handleClickReset}>Reset</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        ) // return
    } // render
}; // class PlayerChat

export default PlayerChat;