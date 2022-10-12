import Image from "next/image";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project, i) => (
            <div key={project}>
              <Image
                className="w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                src="/vercel.svg"
                alt="hallo"
                height={400}
                width={400}
              />
              <div>
                <h4>
                  Case Study {i} of {projects.length}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
