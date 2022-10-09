import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Johannes",
      "guy-who-loves-programming",
      "works-fulltime-in-an-insurance-company",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"></Cursor>
      </h1>
    </div>
  );
}

export default Hero;
