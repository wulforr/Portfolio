import React from "react";
import LandingSvg from "../../assets/landing.svg";

export default function LandingPage() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-4xl sm:text-5xl xl:text-6xl  mb-4 font-medium text-gray-900">
              Shaurya Vardhan Singh
            </h1>
            <p class="mb-8 leading-relaxed">
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Get In Touch
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="A person coding"
              src={LandingSvg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
