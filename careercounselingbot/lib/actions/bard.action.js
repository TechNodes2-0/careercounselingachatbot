"use server";

import {GoogleGenerativeAI} from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GIMINI_API_KEY);

export default async function getAnswer(prompt,user) {
    console.log(user)
  // For text-only input, use the gemini-pro model
  const {std,interest,achievement}=user;
//   const std="10th";
//   const   interest="science";
//   const   interest2="maths";
//   const   achievement="Silver Medalist in Olympiad";
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const templatePrompt=`You are a career counselor and a student comes to you for advice. They are unsure of what career path to take and are looking for guidance. What advice do you give them? based on that 
//   Student is studying in ${std} std and is interested in ${interest}  and has achievement of ${achievement}. Now answer this question  .`+prompt ;

  const result = await model.generateContent(templatePrompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

