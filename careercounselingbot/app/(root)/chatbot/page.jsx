"use client"
import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai'; // Import AiOutlineMessage icon from React Icons
import getAnswer from '../../../lib/actions/bard.action';
import ChatMessage from '../../../components/shared/ChatMessage';
import UserInput from '../../../components/shared/UserInput';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle user messages
  const handleUserMessage = async (message) => {
    // Add the user's message to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    
    // Send the user's message to the chatbot backend
    const botResponse =  await getAnswer(message);
    
    // Add the bot's response to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
  };

  return (
    <div className="flex  mt-4   flex-col">
      <div className="w-full  bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-indigo-600 px-4 py-3 flex items-center">
          <AiOutlineMessage className="h-6 w-6 mr-2 text-white" /> {/* Chat Icon */}
          <span className="font-semibold text-white">Chat with Bot</span>
        </div>
        <div className=" p-4 bg-gray-100 rounded-lg overflow-y-auto ">
  {messages.map((message, index) => (
    <ChatMessage key={index} text={message.text} sender={message.sender} />
  ))}
</div>

        <UserInput onMessageSubmit={handleUserMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
