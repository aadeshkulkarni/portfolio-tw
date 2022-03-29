import React from "react";
import developer from "../../assets/devloper.svg";
import Typist from "react-typist";
import { github, instagram, linkedIn, twitter } from "../commons/icons/index";
import Icon from "../commons/icons";

const Home = () => {
  return (
    <div className="flex flex-col items-center flex-auto w-full justify-evenly">
      <div className="w-5/6 p-5 text-3xl font-semibold text-center bg-gray-200 rounded-lg bg-opacity-30 backdrop-filter backdrop-blur">
        Aadesh Kulkarni
        <div className="p-3 text-xl font-normal text-center text-gray-700">
          <Typist>
            <Typist.Delay ms={500} />
            <span>Frontend</span>
            <Typist.Backspace count={8} delay={400} />
            <span>Backend</span>
            <Typist.Backspace count={8} delay={400} />
            <span>Fullstack Developer</span>
            <Typist.Backspace count={21} delay={400} />
            <span> Tech Enthusiast </span>
          </Typist>
        </div>
      </div>
      <div className="bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur">
        <img src={developer} alt="Developer" />
      </div>

      <div className="grid w-4/6 grid-cols-2 gap-1">
        <div className="p-5 bg-gray-200 rounded-tl-lg bg-opacity-30 backdrop-filter backdrop-blur">
          <a href="https://www.youtube.com/channel/UCpGCBcigYMaiPeDMmhHkMMw">
            <div className="flex items-center justify-center">
              <Icon label={twitter} noMode={true}/>
            </div>
          </a>
        </div>
        <div className="p-5 bg-gray-200 rounded-tr-lg bg-opacity-30 backdrop-filter backdrop-blur">
          <a href="https://www.instagram.com/aadeshkulkarni/">
            <div className="flex items-center justify-center">
              <Icon label={instagram} noMode={true}/>
            </div>
          </a>
        </div>
        <div className="p-5 bg-gray-200 rounded-bl-lg bg-opacity-30 backdrop-filter backdrop-blur">
          <a href="https://github.com/aadeshkulkarni">
            <div className="flex items-center justify-center">
              <Icon label={github} noMode={true}/>
            </div>
          </a>
        </div>
        <div className="p-5 bg-gray-200 rounded-br-lg bg-opacity-30 backdrop-filter backdrop-blur">
          <a href="https://www.linkedin.com/in/aadeshkulkarni/">
            <div className="flex items-center justify-center">
              <Icon label={linkedIn} noMode={true}/>
            </div>
          </a>
        </div>
      </div>

      <a
        href="mailto:aadesh.kulkarni@outlook.com"
        className="w-5/6 p-5 text-xl font-medium text-center bg-gray-100 rounded-lg shadow-lg bg-opacity-70 backdrop-filter backdrop-blur animate-pulse"
      >
        Contact
      </a>
    </div>
  );
};
export default Home;
