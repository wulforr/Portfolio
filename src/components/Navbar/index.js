import React from "react";

export default function Navbar() {
  return (
    <div className="shadow-md sticky top-0 bg-white">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap justify-between p-5 flex-row items-center">
          <div>
            <a
              href="/#"
              className="flex title-font font-medium items-center text-gray-900 mb-0"
            >
              <svg
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.34375 5.34375H101.828V3L4.95312 3C3.87444 3 3 3.87445 3 4.95313L3 101.047C3 102.126 3.87445 103 4.95313 103H101.047C102.126 103 103 102.126 103 101.047V24.0436C103 21.8555 99.9527 21.3223 99.2098 23.3805L78.3229 81.2449L61.5166 53.7962C60.7746 52.5843 59.0281 52.5452 58.2326 53.7227L39.6125 81.2826L19.6995 19.2202L17.4679 19.9362L37.6264 82.7641C38.1244 84.316 40.1921 84.6113 41.1046 83.2608L59.8348 55.5378L76.7486 83.1621C77.6039 84.559 79.6953 84.346 80.2514 82.8054L100.656 26.2763V100.656H5.34375V5.34375Z"
                  stroke="#7510F7"
                  strokeWidth="5"
                />
              </svg>
              <span className="ml-3 text-xl">Wulfor</span>
            </a>
          </div>
          <div>
            <a
              href="https://blog.wulfor.com"
              className="p-2 mx-5 hover:text-purple-700"
            >
              Blogs
            </a>
            <a href="/#contactSection">
              <button className="inline-flex items-center bg-gray-200 border-0 py-2 px-3 focus:outline-none hover:bg-purple-500 hover:text-white rounded text-base mt-0">
                Say Hello
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
