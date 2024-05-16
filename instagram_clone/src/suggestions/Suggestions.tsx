import React, { useState } from "react";
import Suggestion from "./Suggestion";

export interface SuggestionProps {
  username: string;
  message: string;
}

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    { username: "jsmith", message: "New to Instagram" },
    { username: "qjones", message: "Famous Dude" },
    { username: "qlatifah", message: "The Equalizer" },
    { username: "jtweedy", message: "Just a rocker dude" },
  ]);

  return (
    <div className="w-[350px] mt-[30px] ml-[50px] font-sans">
      <div className="flex flex-row bg-none border-none justify-between mb-2.5 text-slate-400">
        <span>Suggested for you</span>
        <button className="bg-none border-none font-extrabold text-black hover:cursor-pointer hover:text-slate-400">
          See all
        </button>
      </div>
      <div className="w-full flex flex-col">
        {suggestions.map((suggestion: SuggestionProps) => (
          <Suggestion
            key={suggestion.username} // o/w, warning about needing unique key prop
            username={suggestion.username}
            message={suggestion.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
