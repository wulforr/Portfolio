import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    console.log("calling handle submit");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", fullName, email, message }),
    })
      .then(() => {
        console.log("in then");
        setFullName("");
        setEmail("");
        setMessage("");
        setFormMessage("Message sent successfully!!!");
        setTimeout(() => setFormMessage(""), 1000);
      })
      .catch((error) => {
        console.log("in catch");
        setFormError("error");
      });
    e.preventDefault();
  };

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center max-w-6xl">
          <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Get in Touch!
            </h1>
            <p class="leading-relaxed mt-4 mb-8">
              Just want to say hello, ask a question, tell me a joke or get
              together for a coffee whatever it is I am interested to get in
              touch with you.
            </p>
            <div className="flex justify-center">
              <a
                href="https://twitter.com/wulforr"
                target="_blank"
                rel="noreferrer"
                className="border border-2 rounded-lg border-gray-200 p-3 m-2 text-2xl text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/wulforr"
                target="_blank"
                rel="noReferrer"
                className="border border-2 rounded-lg border-gray-200 p-3 m-2 text-2xl  text-gray-800 hover:bg-gray-800 hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:gsshaurya@gmail.com"
                target="_blank"
                rel="noReferrer"
                className="border border-2 rounded-lg border-gray-200 p-3 m-2 text-2xl text-red-500 hover:bg-red-500 hover:text-white"
              >
                <IoIosMail />
              </a>
              <a
                href="https://www.linkedin.com/in/shaurya-vardhan-singh/"
                target="_blank"
                rel="noReferrer"
                className="border border-2 rounded-lg border-gray-200 p-3 m-2 text-2xl  text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div class="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 pb-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            {/* <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2> */}
            <form onSubmit={handleSubmit}>
              <div class="relative mb-4">
                <label
                  for="full-name"
                  class="leading-7 text-sm text-gray-600 text-left w-full float-left"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-600 text-left w-full float-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="message"
                  class="leading-7 text-sm text-gray-600 text-left w-full float-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Send Message
                <RiMailSendFill className="-mt-0.5 inline ml-2" />
              </button>
              {/* this div is so that layout doesnt change on error or success message */}
              {!formError && !formMessage && (
                <div className="text-gray-100 p-1 cursor-default center">
                  Easter Egg
                </div>
              )}
              {formError && (
                <div className="text-red-500 p-1 center">{formError}</div>
              )}
              {formMessage && (
                <div className="text-green-500 p-1 center">{formMessage}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
