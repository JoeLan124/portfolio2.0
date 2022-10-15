import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src="/test.png"
          height={100}
          width={100}
          className="rounded-full border-gray-400 object-cover "
        />
        <div className="absolute top-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w.28 xl:h32 xl:w-32 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className=" text-3xl font-bold text-black opacity-100">100%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
