"use client";
"use client";
import axios from "axios";
import React, { useEffect } from "react";
import ChatMessage from "../../../components/shared/ChatMessage";
import UserInput from "../../../components/shared/UserInput";
import ChatMessage from "../../../components/shared/ChatMessage";
import UserInput from "../../../components/shared/UserInput";
import { useState } from "react";
import getAnswer from "../../../lib/actions/bard.action";
import { useAuth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.action";
import { saveChatMessage, getChatMessages } from "@/lib/actions/chat.actions";
import Image from "next/image";
import PromteSuggestion from "@/components/chatbot/PromteSuggestion";
function page() {
  const { userId } = useAuth();
  const { userId } = useAuth();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(true);
  };
  const toggleoff = () => {
    setOpen(false);
  };

  const fetchUser = async () => {
    try {
      const user = await getUserById(userId);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchChatMessages = async (userId) => {
    try {
      const chatMessages = await getChatMessages(userId);
      console.log(chatMessages);
      chatMessages.forEach((message) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message.question, sender: "user" },
        ]);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: message.answer, sender: "bot" },
        ]);
      });
      // setMessages(chatMessages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    if (userId) {
      console.log("fetching Messages");
      fetchChatMessages(userId);
    }
  }, []);
  const getAnswerfromOpenAI = async (message, user) => {
    try {
      const response = await axios.post("http://localhost:3000/api/chat", {
        question: message,
        user,
      });
      const data = response.data;
      return data;
    } catch (error) {
      console.error("Error fetching data from the server:", error);
    }
  };
  // Function to handle user messages
  const inputChange = (message) => {
    console.log(message);
    if (message === "/") {
      toggle();
    } else {
      toggleoff();
    }
  };
  const handleUserMessage = async (message) => {
    // Add the user's message to the chat display
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);

    // Send the user's message to the chatbot backend
    const botResponse = await getAnswer(message, user);

    // Add the bot's response to the chat display
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: "bot" },
    ]);
    saveChatMessage({
      question: message,
      answer: botResponse,
      userId: user._id,
    });

    const gptresponse = await getAnswerfromOpenAI(message, user);
    console.log(gptresponse);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: gptresponse.reply, sender: "bot" },
    ]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: gptresponse.reply, sender: "bot" },
    ]);
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row w-full h-full overflow-x-hidden">
        {/* SIdebar */}
        <div className="flex flex-col flex-shrink-0 w-64 py-8 pl-6 pr-2 bg-white max-md:hidden">
          <div className="flex flex-col items-center w-full px-4 py-6 mt-4 bg-indigo-100 border border-gray-200 rounded-lg">
            <div className="w-20 h-20 overflow-hidden border rounded-full">
              <img src={user?.picture} alt="Avatar" className="w-full h-full" />
            </div>
            <div className="mt-2 text-sm font-semibold">{user?.name}</div>
            <div className="text-xs text-gray-500">{user?.educationLevel}</div>
            <div className="text-xs text-gray-500">{user?.interest}</div>
          </div>
        </div>

        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 h-full p-4 bg-gray-100 rounded-2xl">
            <div className="flex flex-col h-full mb-4 overflow-x-auto">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      text={message.text}
                      user={user}
                      sender={message.sender}
                    />
                  ))}
                  {/* <div className="p-3 rounded-lg col-start-61col-end-13">
                    <div className="flex flex-row-reverse items-center justify-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                      <Image 
                src={'https://cdn-icons-png.flaticon.com/512/6873/6873405.png' }
                alt="Picture of the author"
                width={50}
                height={50}
                />
                      </div>
                      <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                        <div>Are you exploring career options, seeking advice on job applications, or something else?</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">

                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                      User
                      </div>
                      <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                        <div>Hi there.</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex flex-row-reverse items-center justify-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                        A
                      </div>
                      <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                        A
                      </div>
                      <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex flex-row-reverse items-center justify-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                        A
                      </div>
                      <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-200 rounded-full">
                        A
                      </div>
                      <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
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
            {/* 
          input field */}
            <div className="">
              <PromteSuggestion />
            </div>
            <UserInput onMessageSubmit={handleUserMessage} />
            {/* <div className="flex flex-row items-center w-full h-16 px-4 bg-white rounded-xl">
            {isOpen && (
              <div className="max-h-56 rounded-xl bg-white w-full px-4 py-2 my-4">
                <div className="hover:bg-gray-100 w-full my-2 py-2 px-2 rounded-lg">
                  <p className=" text-md text-black font-semibold">/gif</p>
                  <p className=" text-sm text-gray-700">search animated gif</p>
                </div>
                <div className="hover:bg-gray-100 w-full my-2 py-2 px-2 rounded-lg">
                  <p className=" text-md text-black font-semibold">/gif</p>
                  <p className=" text-sm text-gray-700">search animated gif</p>
                </div>
              </div>
            )}
            <UserInput
              onMessageSubmit={handleUserMessage}
              onInputChange={inputChange}
            />
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
