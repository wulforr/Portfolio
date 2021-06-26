import React from "react";

export default function ProjectTile({ data }) {
  const { imgUrl, title, link, description, technologiesUsed } = data;
  return (
    <a
      href={link}
      className="p-4 lg:w-1/2 border-transparent border-2 rounded-lg hover:bg-gray-100 hover:shadow-sm "
      target="_blank"
      rel="noreferrer"
    >
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="project"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={imgUrl}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-xl text-purple-500">
            {title}
          </h2>
          <h3 className="text-gray-500 mb-3">{technologiesUsed.join(", ")}</h3>
          <p className="mb-4 sm:px-0">{description}</p>
        </div>
      </div>
    </a>
  );
}
