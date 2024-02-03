"use client";
"use client";
import axios from "axios";
import React, { useEffect } from "react";
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
                </div>
              </div>
            </div>
            {/* 
            {/* 
          input field */}
            {isOpen && (
              <div className="w-full px-4 py-2 my-4 bg-white max-h-56 rounded-xl">
                <div className="w-full px-2 py-2 my-2 rounded-lg hover:bg-gray-100">
                  <p className="font-semibold text-black text-md">/gif</p>
                  <p className="text-sm text-gray-700 ">search animated gif</p>
                </div>
                <div className="w-full px-2 py-2 my-2 rounded-lg hover:bg-gray-100">
                  <p className="font-semibold text-black text-md">/gif</p>
                  <p className="text-sm text-gray-700 ">search animated gif</p>
                </div>
              </div>
            )}
            <div className="">
              <PromteSuggestion message={messages} />
            </div>
            <UserInput
              onMessageSubmit={handleUserMessage}
              onInputChange={inputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
