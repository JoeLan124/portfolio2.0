import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        //animate={{ x: 0, opacity: 1 }}
      >
        <Image
          className=" rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="/joePic.jpg"
          alt="Its me"
          height={120}
          width={120}
        />
      </motion.div>

      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">CEO of</h4>
        <p className="font-bold text-2xl mt-1">my home</p>
        <div className="space-x-4 py-2">
          <Image
            className="rounded-full"
            src="/joePic.jpg"
            alt="Its me"
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src="/joePic.jpg"
            alt="Its me"
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src="/joePic.jpg"
            alt="Its me"
            height={40}
            width={40}
          />
          <Image
            className="rounded-full"
            src="/joePic.jpg"
            alt="Its me"
            height={40}
            width={40}
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          Startet work ... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
