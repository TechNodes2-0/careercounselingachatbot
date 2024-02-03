import React, { useState } from "react";
import PromteSuggestion from "../chatbot/PromteSuggestion";

const UserInput = ({ onMessageSubmit, onInputChange }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    event.preventDefault();;
    setMessage(event.target.value);
    onInputChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUbmitted");
    console.log(message);
    onMessageSubmit(message);
    setMessage("");
    setMessage("");
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
  };

  //   return (
  //     <form  onSubmit={handleSubmit} className="user-input-form flex justify-between items-center p-4 bg-gray-200 rounded-lg">
  //       <input
  //         className="w-full mr-2 py-2 px-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
  //         type="text"
  //         value={message}
  //         onChange={handleChange}
  //         placeholder="Type your message..."
  //       />
  //       <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Send</button>
  //     </form>
  //   );
  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </form>
        </div>
      </div>
      <div className="ml-4">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="flex items-center justify-center bg-indigo-200 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        >
          <span>Send</span>
          <span className="ml-2">
            <svg
              className="w-4 h-4 transform rotate-45 -mt-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserInput;

{
  /* <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
<div>
  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
      ></path>
    </svg>
  </button>
</div>
<div className="flex-grow ml-4">
  <div className="relative w-full">
    <input
      type="text"
      className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
    />
    <button className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-gray-600">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
  </div>
</div>
<div className="ml-4">
  <button className="flex items-center justify-center flex-shrink-0 px-4 py-1 text-white bg-indigo-200 hover:bg-indigo-600 rounded-xl">
    <span>Send</span>
    <span className="ml-2">
      <svg
        className="w-4 h-4 -mt-px transform rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        ></path>
      </svg>
    </span>
  </button>
</div>
</div> */
}

