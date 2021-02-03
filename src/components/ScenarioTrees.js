import React from 'react';

const ScenarioTrees = {
    tutorial: {
      statements: {
        A: {
          userStatement: 'Hi there',
          botResponse: 'Hi',
            AA: {
              userStatement: 'My name is User',
              botResponse: "Hi User, I'm Samantha",
                AAA: {
                  userStatement: 'What brings you to this event?',
                  botResponse: 'responseAAA'
                },
                AAB: {
                  userStatement: 'userStatementAAB',
                  botResponse: 'responseAAB'
                }
            }, // AA
            AB: {
              userStatement: 'What brings you to this event?',
              botResponse: "I'm here to meet people and learn",
                ABA: {
                  userStatement: 'userStatementABA',
                  botResponse: 'responseABA'
                },
                ABB: {
                  userStatement: 'userStatementABB',
                  botResponse: 'responseABB'
                }
            } // AB
        }, // A
  
        B: {
          userStatement: 'Hi I thought I would come over and introduce myself',
          botResponse: "Nice to meet you, I'm Samantha",
            BA: {
              userStatement: 'userStatementBA',
              botResponse: 'responseBA',
                BAA: {
                  userStatement: 'userStatementBAA',
                  botResponse: 'responseBAA'
                },
                BAB: {
                  userStatement: 'userStatementBAB',
                  botResponse: 'responseBAB'
                }
            }, // BA
            BB: {
              userStatement: 'userStatementBB',
              botResponse: 'responseBB',
                BBA: {
                  userStatement: 'userStatementBBA',
                  botResponse: 'responseBBA'
                },
                BBB: {
                  userStatement: 'userStatementBBB',
                  botResponse: 'responseBBB'
                }
              } // thirdStatements
            } // BB 
          } // secondStatements
        } // B
      } // ScenarioTrees


export default ScenarioTrees