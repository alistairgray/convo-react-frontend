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
                userStatement: 'Okay great. Nice to meet you',
                botResponse: 'Same to you, have a good one.',
                commentary: 'In this case, the conversation stopped because there is an expectation that Samantha will lead it'
              }
          }, // AA
          AB: {
            userStatement: 'What brings you to this event?',
            botResponse: "I'm here to meet people and learn",
            commentary: 'This is a good statement to make but try to make the question open',
              ABA: {
                userStatement: 'Same',
                botResponse: 'Okay great. It was nice talking to you.',
                commentary: 'In this response, you kept the response short without offering a followup question'
              },
              ABB: {
                userStatement: "That sounds similar to me, I'm excited for the talk on dinosaurs. Are you attending that talk?",
                botResponse: "Oh I didn't realise they were doing that! No, but I'd like to join if I can.",
                commentary: 'In this response you have brought your own interests and given Samantha something that it is interested in. You have listened to what it has said and this conversation has enough momentum to keep going.'
              } // ABB
            } // AB
        }, // A

      B: {
        userStatement: "Hi I thought I would come over and introduce myself, I'm Theodore",
        botResponse: "Nice to meet you, I'm Samantha",
        commentary: 'This is a polite and friendly way to reach out to someone',
          BA: {
            userStatement: "Nice to meet you too. This is quite a cool event isn't it? What are you seeking to get out of it?",
            botResponse: 'Yes it is. I suppose I am here to meet people and learn from it',
            commentary: 'You are continuing with the friendly tone and Samantha is keeping up with it.',
              BAA: {
                userStatement: "That sounds like you're keeping an open mind and trying to get the most out of it right?",
                botResponse: 'Yes these events can be full on and I want to just explore what it has to offer',
                commentary: 'With this conversation, you can see that its starting to gain momentum. The reason is because you are listening to what Samantha is saying and not trying to talk about yourself.'
              },
              BAB: {
                userStatement: "That sounds similar to me, I'm excited for the talk on dinosaurs. Are you attending that talk?",
                botResponse: "Oh I didn't realise they were doing that! No, but I'd like to join if I can.",
                commentary: 'Whilst the conversation went well. You are offering a solution rather than hearing what Samantha has to say'
              }
          }, // BA
          BB: {
            userStatement: "I'm seeking to network and meet people at this event.",
            botResponse: "That's good. Have you been networking for long?",
            commentary: 'This can be a common thing to say when you are first starting out. But you are moving the conversation to yourself',
              BBA: {
                userStatement: 'I have just started and I am practising how to do it',
                botResponse: 'That is great. Hope it all works out for you.',
                commentary: 'This is a good first conversation but next time, try to include the person you are speaking to. '
              },
              BBB: {
                userStatement: 'This is my first event',
                botResponse: 'Ah very good. Well good luck!',
                commentary: 'In this response, you have given a short reply, which is quite abrupt. Try to give a broader reply'
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
