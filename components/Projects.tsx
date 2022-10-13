import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h3 className="h-screen absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project, i) => (
            <div
              key={project}
              className="w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Image src="/vercel.svg" alt="hallo" height={400} width={400} />
              </motion.div>
              <div className="space-y-10 px-10 md:px-10 max-x-full">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0a]/50">
                    Case Study {i + 1} of {projects.length}:{" "}
                  </span>
                  UPS clone
                </h4>
                <p className="text-sm text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, velit quod, deserunt assumenda odio vitae et rem
                  veritatis perferendis reprehenderit recusandae voluptatem vel
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
