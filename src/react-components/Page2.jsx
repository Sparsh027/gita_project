import React, { useState, useEffect } from "react";
import Main from "../assets/main2.jpg";
import Scroll from "../assets/scroll2.gif";
import NewImage from "../assets/new_scroll.png";
import Typewriter from "typewriter-effect";
import Pen from "../assets/pen.png";

export default function Home() {
  const [scrollImage, setScrollImage] = useState(Scroll);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollImage(NewImage);
      setDisplayText("In publishing and graphic design, Lorem.");
    }, 3400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const cursorElement = document.querySelector(".custom-cursor");
    cursorElement.style.cursor = `url(${Pen}), auto`;
  }, []);

  return (
    <div className="custom-cursor">
      <div className="h-screen w-screen flex flex-col-reverse md:flex-row">
        <div className="flex basis-1/2 h-screen md:h-max-[60%] lg:h-max-[100%] align-middle justify-center my-auto relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-black font-bold z-20 text-lg justify-center text-center max-w-[50%] md:max-w-[36%] lg:max-w-[24%]">
              <Typewriter
                options={{
                  strings: [displayText],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 100,
                  deleteSpeed: 0,
                }}
              />
            </div>
          </div>
          <img
            alt=""
            src={scrollImage}
            height={596}
            width={600}
            className="relative"
          />
        </div>
        <div
          className="flex basis-1/2 justify-center align-middle my-auto"
          id="main"
        >
          <img alt="" src={Main} height={600} width={900} />
        </div>
      </div>
    </div>
  );
}
