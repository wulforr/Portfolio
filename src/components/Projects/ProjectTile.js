import React from "react";

export default function ProjectTile({ data }) {
  const { imgUrl, title, link, description, technologiesUsed } = data;
  return (
    <a
      href={link}
      class="p-4 lg:w-1/2 border-transparent border-2 rounded-lg hover:border-purple-300 "
      target="_blank"
    >
      <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="project"
          class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={imgUrl}
        />
        <div class="flex-grow sm:pl-8">
          <h2 class="title-font font-medium text-xl text-purple-500">
            {title}
          </h2>
          <h3 class="text-gray-500 mb-3">{technologiesUsed.join(", ")}</h3>
          <p class="mb-4 px-10 sm:px-0">{description}</p>
        </div>
      </div>
    </a>
  );
}
