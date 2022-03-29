import React, { useState } from "react";

const Icon = ({ label, noMode }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");
  return (
    <div
      className={`w-16 h-16 shadow-lg ${noMode ? 'bg-gray-100' :
        mode === "dark" ? "bg-gray-500" : "bg-gray-100 text-black"
      }  bg-opacity-90 focus-within:animate-pulse text-white rounded-lg flex justify-center items-center cursor-pointer`}
    >
      {label()}
    </div>
  );
};
export default Icon;
