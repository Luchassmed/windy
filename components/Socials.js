import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Socials() {
  return (
    <div>
      <div className="text-5xl flex justify-center gap-16 py-3 dark:text-white">
        <a
          className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://www.linkedin.com/in/luchas-schmidt/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://github.com/Luchassmed"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          className="transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
          href="mailto: kapot@live.dk"
          target="_blank"
        >
          <AiFillMail />
        </a>
      </div>
    </div>
  );
}
