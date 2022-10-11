import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
      initial={{ x: -500, opacity: 0 }}
      //animate={{ x: 0, opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      // viewport={{ once: true }}
      transition={{
        duration: 1.2,
      }}
    >
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px] ml-4">
        About
      </h3>

      <motion.img
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64"
        src={"/joePic.jpg"}
        height="750"
        width="750"
        alt="A Picture of me - Johannes"
      />
      <div>
        <div className="space-y-10 md:px-10 mt-12">
          <h4 className="text-4xl font-semibold text-center">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little </span>{" "}
            background
          </h4>
          <p className="text-sm justify-center w-96 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            doloremque sed sit cupiditate, ea sequi commodi non debitis, nemo
            laborum dolorum cum iusto reprehenderit pariatur illum maiores sint
            distinctio ipsa! A veniam reiciendis officia qui, distinctio
            voluptas atque ex sint esse quisquam pariatur aliquid, minus debitis
            harum nostrum ratione, blanditiis earum repellendus? Maiores
            exercitationem facilis placeat officia, nobis minima eum. Suscipit
            modi eveniet accusantium officia beatae repellat soluta aliquid iste
            corrupti consequuntur, incidunt nesciunt quae magnam, est quo
            maiores! Earum nisi perspiciatis obcaecati omnis odit vel veniam
            nihil eius ipsum? Laboriosam distinctio ut porro? Quae dolorem
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
