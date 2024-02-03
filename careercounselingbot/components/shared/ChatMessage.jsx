"use client"
import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
const ChatMessage = ({ text, user,sender }) => {

//   return (
//     <div className={`chat-message ${sender}`}>
//       <p>{text}</p>
//     </div>
//   );
  return(


          <div
            
            className={`col-start-${sender === 'user' ? '1' : '6'} col-end-${
            sender === 'user' ? '8' : '13'
            } p-3 rounded-lg`}
          >
            <div className={` ${sender === 'user'?`flex flex-row items-center`:`flex items-center justify-start flex-row-reverse` }`}>
              <div className={`flex items-center justify-center h-10 w-10 rounded-full bg-indigo-200 flex-shrink-0`}>
      
           
                <Image 
                src={sender === 'user' ?  user?.picture  :'https://cdn-icons-png.flaticon.com/512/6873/6873405.png' }
                alt="Picture of the author"
                width={50}
                height={50}
                />
              </div>
              <div className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl`}>
              <ReactMarkdown>{text}</ReactMarkdown>

              </div>
            </div>
          </div>



 
  );
};

export default ChatMessage;
