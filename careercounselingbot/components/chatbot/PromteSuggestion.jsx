import React from "react";

export default function PromteSuggestion() {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="flex w-full mt-4 overflow-x-auto text-xs gap-x-2 whitespace-nowrap text-slate-600 dark:text-slate-300 sm:text-sm">
        <button className="p-2 rounded-lg bg-slate-200 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50">
          Tell me about Enginerring
        </button>
        <button className="p-2 rounded-lg bg-slate-200 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50">
          What are the entrance exams for IITs and NITs?
        </button>

        <button className="p-2 rounded-lg bg-slate-200 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50">
          What skills do I need for Learning React?
        </button>
        <button className="p-2 rounded-lg bg-slate-200 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50">
          Compare Science vs Arts.
        </button>
      </div>
    </div>
  );
}
