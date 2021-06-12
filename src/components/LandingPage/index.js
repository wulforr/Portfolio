import React from "react";
import LandingSvg from "../../assets/landing.svg";

export default function LandingPage() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl sm:text-5xl xl:text-6xl  mb-4 font-medium text-gray-900">
              Shaurya Vardhan Singh
            </h1>
            <p className="mb-8 leading-relaxed">
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div className="flex justify-center">
              <a href="/#contactSection">
                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="A person coding"
              src={LandingSvg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
