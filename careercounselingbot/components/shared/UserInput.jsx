import React, { useState } from 'react';

const UserInput = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <form className="user-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default UserInput;
