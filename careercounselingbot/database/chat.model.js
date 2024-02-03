import { Schema, models, model, Document } from "mongoose";
const ChatMessageSchema = new Schema({
    question: String,
    answer: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  });
  
  const ChatMessage =
    models.ChatMessage || model("ChatMessage", ChatMessageSchema);
  
  export default ChatMessage;