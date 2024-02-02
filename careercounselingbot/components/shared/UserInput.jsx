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
    <form  onSubmit={handleSubmit} className="user-input-form flex justify-between items-center p-4 bg-gray-200 rounded-lg">
      <input
        className="w-full mr-2 py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Send</button>
    </form>
  );
};

export default UserInput;
