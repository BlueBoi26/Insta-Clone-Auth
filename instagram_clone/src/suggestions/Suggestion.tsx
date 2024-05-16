import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";

function Suggestion({ username, message }: SuggestionProps) {
  return (
    <div className="flex flex-row justify-between mb-2.5">
      <div className="flex flex-row hover:cursor-pointer">
        <div className="mr-2.5">
          <Avatar>
            <img src={faker.image.avatar()} />
          </Avatar>
        </div>
        <div className="fle flex-col">
          <span className="font-extrabold">{username}</span>
          <span className="font-light text-sm">{message}</span>
        </div>
      </div>
      <button className="bg-none border-none text-blue-400 font-bold hover:cursor-pointer hover:text-slate-400">
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
