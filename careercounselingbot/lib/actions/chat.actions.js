"use server"
import { connectToDatabase } from "../../database";
import mongoose from "mongoose";
import ChatMessage from "../../database/chat.model";
export async function saveChatMessage  ({ question, answer, userId }) {
    try {
      

        // Create a new ChatMessage document
        const chatMessage = await  ChatMessage.create({
            question,
            answer,
            user: userId // Assuming userId is provided in the request body
        });

        // Save the chat message to the database
     return JSON.parse(JSON.stringify(chatMessage));

     
    } catch (error) {
        console.error('Error saving chat message:', error);
  
    }
};
export async function getChatMessages  (userId)  {
    try {

// console.log("ids",userId);
        await connectToDatabase();
        const chatMessages = await ChatMessage.find({userId}).populate('user');
        return JSON.parse(JSON.stringify(chatMessages));
    } catch (error) {
        console.error('Error getting chat messages:', error);
    }
};

