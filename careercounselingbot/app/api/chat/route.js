import { NextRequest,NextResponse } from "next/server";
import getAnswer from "../../../lib/actions/bard.action";
export const POST = async (request)=>{
    const { question } = await request.json();

try {
    const answer = await getAnswer(question);
    return new NextResponse({
        status: 200,
        body: answer,
    });
} catch (error) {
    return new NextResponse({
        status: 500,
        body: "Error generating response",
    });
    
}
} 