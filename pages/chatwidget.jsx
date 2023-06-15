import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';

import logo from './logo.svg';

import 'react-chat-widget/lib/styles.css';

function ChatWidget() {

    useEffect(() => {
        addResponseMessage('Hello! How can I help you?');
    }, []);


    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/api/chat', //replace with ngrok URL
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "prompt": newMessage
            }
        };

        async function makeRequest() {
            try {
                const response = await axios.request(config);
                console.log(JSON.stringify(response.data));
                addResponseMessage(JSON.stringify(response.data.response.answer.trim()));
            }
            catch (error) {
                console.log(error);
            }
        }

        makeRequest();
    };
    const profileClientAvatar = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1686756018~exp=1686756618~hmac=68eae82c8f3cc80acf77dca109bc0818ce36bf067a87a3d6529198f5d7089bb9"
    const profileAvatar = "https://img.freepik.com/premium-vector/3d-smiling-woman-avatar-girl-with-short-brown-hair_541075-1059.jpg?w=826"
    return (
        <div className="App">
            {
                
                    <Widget
                        handleNewUserMessage={handleNewUserMessage}
                        profileAvatar={profileAvatar}
                        profileClientAvatar={profileClientAvatar}
                        title="Course Advisor Chatbot"
                        subtitle="Your Career Assistant"
                    />
                
            }

        </div>
    );
}
export default ChatWidget