"use client"
import axios from "axios";
import React, { useEffect } from "react";
import ChatMessage from '../../../components/shared/ChatMessage';
import UserInput from '../../../components/shared/UserInput';
import { useState } from "react";
import getAnswer from '../../../lib/actions/bard.action';
import { useAuth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.action";
import Image from "next/image";
function page() {
const{userId} = useAuth();
  const [messages, setMessages] = useState([]);
  const[user,setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const user = await getUserById(userId);
      console.log(user);
      setUser(user);
    } catch (error) {

    console.log(error)
      
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])  
  const getAnswerfromOpenAI = async (message) => {
    try {
      const response = await axios.post('http://localhost:3000/api/chat',{
        body: JSON.stringify({ question: message }),
      });
      const data = response.data;
  return data;
    } catch (error) {
      console.error('Error fetching data from the server:', error);
    }
  }
  // Function to handle user messages
  const handleUserMessage = async (message) => {
    // Add the user's message to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    
    // Send the user's message to the chatbot backend
    const botResponse =  await getAnswer(message);
    
    // Add the bot's response to the chat display
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);

    const gptresponse = await getAnswerfromOpenAI(message);
    console.log(gptresponse);
    setMessages((prevMessages) => [...prevMessages, { text: gptresponse.reply, sender: 'bot' }]);
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">

      {/* SIdebar */}
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 max-md:hidden">
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img
                src={user?.picture}
                alt="Avatar"
                className="h-full w-full"
              />
            </div>
            <div className="text-sm font-semibold mt-2">{user?.name}</div>
            <div className="text-xs text-gray-500">{user?.educationLevel}</div>
            <div className="text-xs text-gray-500">{user?.interest}</div>
          </div>
        </div>


        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                {messages.map((message, index) => (
    <ChatMessage key={index} text={message.text}  user={user} sender={message.sender} />
  ))}
   {/* <div className="col-start-61col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                      <Image 
                src={'https://cdn-icons-png.flaticon.com/512/6873/6873405.png' }
                alt="Picture of the author"
                width={50}
                height={50}
                />
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>Are you exploring career options, seeking advice on job applications, or something else?</div>
                      </div>
                    </div>
                  </div> */}


                  {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">

                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                      User
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Hi there.</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
{/* 
          input field */}
          <UserInput   onMessageSubmit={handleUserMessage}/>
            {/* <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
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
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
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
                <button className="flex items-center justify-center bg-indigo-200 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
