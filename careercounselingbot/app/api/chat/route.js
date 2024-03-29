import { NextResponse } from "next/server";

export const POST = async (request) => {
    const check=await request.json();
  const { question,user } = check;
  console.log(check);
const {std,interest,achievement}=user;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
            `You are a career counselor  and a student comes to you for advice. They are unsure of what career path to take and are looking for guidance. What advice do you give them? based on that 
              Student is studying in ${std} std and is interested in ${interest}  and has achievement of ${achievement}`
          },
          {
            role: "user",
            content: `Tell me ${question} and display the answer using visual elements like images,links,cards,buttons etc.`,
          },
        ],
      }),
    });

    const responseData = await response.json();
    const reply = responseData.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};