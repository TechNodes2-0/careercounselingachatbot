import React from "react";
import { connectToDatabase } from "../lib/mongoose";
function page() {
  connectToDatabase();

  return (
    <div className="flex items-center justify-center">
      <h2 className="font-bold text-sky-500"> AI chatbot</h2>
    </div>
  );
}

export default page;
