import React from "react";
import Hashtag from "../public/code.png";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              Most of the projects I have done have been in connection with
              exams and assignments during my schooling at{" "}
              <span className="text-teal-500">Roskilde Universitet</span>. The
              portfolio will be updated continuously...
            </p>
          </div>

          <div className="text-3xl flex justify-center gap-16 py-3 dark:text-white">
            <a
              href="https://github.com/Luchassmed"
              target="_blank"
              className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            >
              <Image src={Hashtag} width={100} height={100} />

              <h3 className="texl-lg font-medium pt-2 pb-8">
                ReactJS webapplication
              </h3>
              <p>Det her</p>
            </a>
            <a
              href="https://github.com/Luchassmed/react-api"
              target="_blank"
              className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            >
              <Image src={Hashtag} width={100} height={100} />
              <h3 className="texl-lg font-medium pt-2 pb-8">ReactJS API</h3>
              <p>A todo-list made with ReactJS</p>
            </a>
            <a
              href="https://github.com/Luchassmed"
              target="_blank"
              className="text-center shadow-lg p-10 rounded-xl my-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
            >
              <Image src={Hashtag} width={100} height={100} />
              <h3 className="texl-lg font-medium pt-2 pb-8">
                Tilebased game in Java
              </h3>
              <p>CS-course project for exam</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
