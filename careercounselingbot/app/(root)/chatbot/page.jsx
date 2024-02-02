import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import UserInput from './UserInput';
// import { sendMessageToChatbot } from './api'; // You'll need to implement this

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle user messages
  const handleUserMessage = async (message) => {
    // Add the user's message to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    
    // Send the user's message to the chatbot backend
    const botResponse = "heelo" || await sendMessageToChatbot(message);
    
    // Add the bot's response to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
      <UserInput onMessageSubmit={handleUserMessage} />
    </div>
  );
};

export default Chatbot;
