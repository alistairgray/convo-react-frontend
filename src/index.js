import React from 'react';
import ReactDOM from 'react-dom';
import ConvoApp from './components/ConvoApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import '../App.scss'

import reportWebVitals from './reportWebVitals';

// Source Decision Tree for Conversation Flows - this contains a series of conversations
const scenarioTrees = {
  tutorial: {
      A: {
        userStatement: 'Hi there',
        botResponse: 'Hi',
        commentary: 'This is quite a neutral approach',
          AA: {
            userStatement: 'My name is Theodore',
            botResponse: "Hi Theodore, I'm Samantha",
            commentary: "You're continuing with a neutral tone",
              AAA: {
                userStatement: 'What brings you to this event?',
                botResponse: "I'm here to meet people and learn",
                commentary: "The conversation so far is still like an interview"
              },
              AAB: {
                userStatement: 'Very well thatHey ',
                botResponse: 'responseAAB',
                commentary: ''
              }
          }, // AA
          AB: {
            userStatement: 'What brings you to this event?',
            botResponse: "I'm here to meet people and learn",
            commentary: '',
              ABA: {
                userStatement: 'userStatementABA',
                botResponse: 'responseABA',
                commentary: ''
              },
              ABB: {
                userStatement: 'userStatementABB',
                botResponse: 'responseABB',
                commentary: ''
              } // ABB
            } // AB
        }, // A

      B: {
        userStatement: "Hi I thought I would come over and introduce myself, I'm Theodore",
        botResponse: "Nice to meet you, I'm Samantha",
        commentary: '',
          BA: {
            userStatement: 'userStatementBA',
            botResponse: 'responseBA',
            commentary: '',
              BAA: {
                userStatement: 'userStatementBAA',
                botResponse: 'responseBAA',
                commentary: ''
              },
              BAB: {
                userStatement: 'userStatementBAB',
                botResponse: 'responseBAB',
                commentary: ''
              }
          }, // BA
          BB: {
            userStatement: 'userStatementBB',
            botResponse: 'responseBB',
            commentary: '',
              BBA: {
                userStatement: 'userStatementBBA',
                botResponse: 'responseBBA',
                commentary: ''
              },
              BBB: {
                userStatement: 'userStatementBBB',
                botResponse: 'responseBBB',
                commentary: ''
              } // BBB
          } // BB
      } // B
    } // Tutorial
  }; // scenarioTrees

ReactDOM.render(
    <ConvoApp scenarioTrees={scenarioTrees} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
