import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="absolute">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>
      </div>
      <motion.img
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="-mb.20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64"
        src={"/post-12.png"}
        height="300"
        width="300"
        alt="A Picture of me - Johannes"
      />
    </div>
  );
}

export default About;
