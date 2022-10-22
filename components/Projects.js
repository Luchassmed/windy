import React from "react";
import Hashtag from "../public/code.png";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Projects() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 50,
    },
  });
  return (
    <>
      <div>
        <section>
          <div className="pb-10">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              Most of the projects I have done have been in connection with
              exams and assignments during my schooling at{" "}
              <span className="text-teal-500">Roskilde Universitet</span>.
              <br />
              The portfolio will be updated continuously...
            </p>
          </div>

          <div
            ref={sliderRef}
            className="keen-slider text-center pb-10 dark:text-white"
          >
            <a
              href="https://github.com/Luchassmed/windy"
              target="_blank"
              className="keen-slider__slide number-slide1 shadow-lg rounded-xl pb-5 hover:scale-110"
            >
              <Image src={Hashtag} width={100} height={100} />

              <h3 className="texl-lg font-medium pt-2 pb-8">Next.js web app</h3>
              <p>
                This portfolio website made with Next.js and styled with
                Tailwind CSS
              </p>
            </a>
            <a
              href="https://github.com/Luchassmed/react-api"
              target="_blank"
              className="keen-slider__slide number-slide2 shadow-lg rounded-xl pb-5"
            >
              <Image src={Hashtag} width={100} height={100} />
              <h3 className="texl-lg font-medium pt-2 pb-8">ReactJS API</h3>
              <p>A todo-list made with ReactJS</p>
            </a>
            <a
              href="https://github.com/Luchassmed/cs-course/tree/master/EC21"
              target="_blank"
              className="keen-slider__slide number-slide3 shadow-lg rounded-xl pb-5"
            >
              <Image src={Hashtag} width={100} height={100} />
              <h3 className="texl-lg font-medium pt-2 pb-8">
                Tile-based game made with Java
              </h3>
              <p>CS-course project for exam</p>
            </a>
            <a
              href="https://github.com/Luchassmed/cs-course/tree/master/WITS22"
              target="_blank"
              className="keen-slider__slide number-slide4 shadow-lg rounded-xl pb-5"
            >
              <Image src={Hashtag} width={100} height={100} />
              <h3 className="texl-lg font-medium pt-2 pb-8">
                Web based blogserver made with PHP, HTML and API
              </h3>
              <p>CS-course project for exam</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
