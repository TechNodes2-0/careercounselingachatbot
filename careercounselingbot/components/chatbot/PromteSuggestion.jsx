import React, { useState } from "react";

export default function PromteSuggestion({ onSuggestionClick, message }) {
  const suggestions = [
    "Tell me about Engineering",
    "What are the entrance exams for IITs and NITs?",
    "What skills do I need for learning React?",
    "Compare Science vs Arts",
  ];

  const [inputValue, setInputValue] = useState("");

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    onSuggestionClick(suggestion); // You can also pass the suggestion to the parent component if needed
  };

  return (
    message.length == 0 && (
      <div className="flex items-center justify-center mb-4">
        <div className="flex w-full mt-4 overflow-x-auto text-xs gap-x-2 whitespace-nowrap text-slate-600 dark:text-slate-300 sm:text-sm">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="p-2 rounded-lg bg-slate-200 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    )
  );
}
