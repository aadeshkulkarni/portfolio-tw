import React from "react"

const apps = [
  {
    name: "Whack A Mole",
    about: "A miniclip game built using Javascript.",
    url: "https://whackit-aadesh.netlify.app/",
    stack: ["ReactJS, TailwindCSS"],
  },
  {
    name: "Connect4 - Multiplayer Game",
    about: "Age old multi-player Board game",
    url: "https://connect4-aadeshk.netlify.app",
    stack: ["ReactJS, TailwindCSS"],
  },
  {
    name: "So you think you can type?",
    about: "A game that tests your typing skills",
    url: "https://aadeshkulkarni.github.io/Speed-Typer/",
    stack: ["Vanilla JS"],
  },
  {
    name: "Psyche",
    about: "A number guessing game that implements binary search algorithm",
    url: "https://aadeshkulkarni.github.io/Guessing-Game/",
  },
]
const Projects = () => {
  return (
    <div className="flex flex-col items-center flex-auto w-full pt-2 pb-10 overflow-y-auto justify-evenly">
      <h1 className="mt-12 text-2xl">Projects</h1>
      {apps.map((app) => (
        <div className="w-5/6 p-4 bg-gray-100 rounded-lg shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg m-0.5">
          <a href={app.url}>
            <h2 className="text-xl font-semibold text-center text-blue-600 animate-pulse">
              {app.name}
            </h2>
          </a>
          <p className="p-2">
            <span className="font-medium text-md">About:</span>
            <br />
            <span className="font-light text-md">{app.about}</span>
            <br />
            {app.stack && (
              <span className="font-medium text-md">Tech Stack:</span>
            )}
            <span className="font-light text-md">
              <ol>{app.stack && app.stack.map((skill) => <li>{skill}</li>)}</ol>
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Projects
