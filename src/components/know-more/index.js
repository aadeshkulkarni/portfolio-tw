import React from "react"
import Typist from "react-typist"
import { smile } from "../commons/icons/index"
const KnowMore = () => {
  const cursorConfig = {
    show: false,
    blink: false,
    element: "|",
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  }
  return (
    <div className="flex items-center justify-center flex-auto w-full pb-10 text-md">
      <Typist cursor={cursorConfig}>
        <div className="flex flex-col items-center w-full overflow-y-auto min-w-4/5 justify-evenly min-h-md max-h-md">
          <div className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            Hi Stranger
          </div>
          <br />
          <Typist.Delay ms={1000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            I have been expecting you
          </span>
          <br />
          <Typist.Delay ms={1000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            I'm Aadesh Kulkarni. It's nice to meet you. :)
          </span>
          <br />
          <Typist.Delay ms={1500} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            I'm a developer.
            <Typist.Backspace count={10} delay={200} />
            Fullstack developer.
          </span>
          <br />
          <Typist.Delay ms={1000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            Which means, I like building stuff. Primarily Web applications.
          </span>
          <br />
          <Typist.Delay ms={3000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            I use ReactJS
            <Typist.Backspace count={7} delay={500} />
            NextJS
            <Typist.Backspace count={6} delay={500} />
            ExpressJS
            <Typist.Backspace count={9} delay={500} />
            NodeJS
            <Typist.Backspace count={6} delay={500} />
            GraphQL
            <Typist.Backspace count={7} delay={500} />
            MongoDB
            <Typist.Backspace count={7} delay={500} />
            Tailwind
            <Typist.Backspace count={8} delay={500} />
            Technology to build applications.
          </span>
          <br />
          <Typist.Delay ms={2000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            Let's connect on social media platforms to know each other better,
            shall we?
          </span>
          <br />
          <Typist.Delay ms={2000} />
          <span className="w-11/12 p-3 bg-gray-100 rounded-lg shadow-lg bg-opacity-80">
            Until then, Goodbye and Be Sage.
            <Typist.Backspace count={5} delay={500} />
            Safe
          </span>
        </div>
      </Typist>
    </div>
  )
}
export default KnowMore
