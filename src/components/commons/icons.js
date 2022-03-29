import React, { useState } from "react";

const Icon = ({ label }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");
  return (
    <div
      className={`w-16 h-16 shadow-lg ${
        mode === "dark" ? "bg-teal-500" : "bg-gray-300 text-black"
      }  bg-opacity-70 focus-within:animate-pulse text-white rounded-lg flex justify-center items-center cursor-pointer`}
    >
      {label()}
    </div>
  );
};
export default Icon;
