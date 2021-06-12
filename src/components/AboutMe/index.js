import React from "react";
import Avatar from "../../assets/avatar.svg";

export default function AboutMe() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-3xl font-medium title-font text-gray-900 tracking-widest">
              About Me
            </h1>
          </div>
          <div className="lg:w-5/6 mx-auto">
            <div className="flex flex-col md:flex-row mt-10">
              <div className="md:w-2/5 text-center md:pr-8 md:py-8">
                <div className="w-30 h-30 rounded-full inline-flex items-center justify-center text-gray-400">
                  <img
                    src={Avatar}
                    alt="avatar of shaurya vardhan singh"
                    className="w-32 h-32 xl:w-48 xl:h-48"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Shaurya Vardhan Singh
                  </h2>
                  <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Software Developer</p>
                </div>
              </div>
              <div className="md:w-3/5 md:pl-8 md:py-8 md:border-l border-gray-200 md:border-t-0 border-t mt-4 pt-4 md:mt-0 text-center md:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Hi, I’m Shaurya. Nice to meet you. I have been tinkering with
                  web development for a couple of years now. I've done
                  freelancing, internships and projects to develop my skills to
                  next level. I believe in constantly improving my skills one
                  step at a time and making practical use of them.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  I am a fan of Anime and love to watch it during my free time.
                  Do let me know if you have some recommendations. I also like
                  to play Rainbow Six Seige game for fun.
                </p>
                <a
                  href="/"
                  className="text-purple-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
