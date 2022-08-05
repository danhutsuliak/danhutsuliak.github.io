import React, { useEffect, useState } from "react";
import styles from "./hero.module.scss";

function Hero() {
  const [word, setWord] = useState("");
  const phrase = `> Hello! My name is Daniel Hutsuliak`;

  useEffect(() => {
    let count = 0;
    let timer = setInterval(() => {
      if (count === phrase.length) {
        return function stopTimer() {
          clearInterval(timer);
        };
      } else {
        setWord(phrase.slice(0, count + 1));
        count++;
      }
    }, 100);

    return function stopTimer() {
      clearInterval(timer);
    };
  }, [phrase]);

  return (
    <div
      id="top"
      className="w-full h-screen bg-secondary relative overflow-hidden"
    >
      <div className="h-2/3 bg-primary flex p-20 justify-between">
        <div className="h-2 w-1/2">
          <h1 className="text-secondary font-bold text-4xl computer:text-5xl leading-relaxed computer:leading-normal p-6 ml-20 mt-20 select-none">
            {word}
          </h1>
          <h1
            className={`text-secondary font-bold text-4xl computer:text-5xl leading-normal p-6 ml-20 select-none transition-colors ease-in duration-500 delay-500 ${
              word.length === phrase.length ? "text-secondary" : "text-primary"
            }`}
          >
            I'm a Front End Developer
          </h1>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
      <div className={styles.curve}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
      </div>
    </div>
  );
}

export default Hero;
