import React from 'react';

const ChatMessage = ({ text, sender }) => {
    
  return (
    <div className={`chat-message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
