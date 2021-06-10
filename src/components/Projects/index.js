import React from "react";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  const ProjectsData = [
    {
      title: "Price Watcher",
      imgUrl: "https://dummyimage.com/201x201",
      technologiesUsed: ["ReactJS", "Node.js", "MongoDB"],
      description:
        "A webapp to keep track of prices of any product on amazon and send an email when price goes below a threshold price",
      link: "https://pricewatcher.surge.sh/",
    },
    {
      title: "Zchat",
      imgUrl: "https://dummyimage.com/201x201",
      technologiesUsed: ["ReactJS", "Faker"],
      description:
        "A chat application made using react and the data is populated using the faker library.",
      link: "https://zchat1.surge.sh/",
    },
    {
      title: "Quote Machine",
      imgUrl: "https://dummyimage.com/201x201",
      technologiesUsed: ["ReactJS", "Redux"],
      description:
        "A webapp to view random quotes from various famous Authors to motivate daily life",
      link: "https://random-quotes-teller.surge.sh/",
    },
    {
      title: "Farmistan",
      imgUrl: "https://dummyimage.com/201x201",
      technologiesUsed: ["ReactJS", "Firebase"],
      description:
        "An e-commerce website to sell agricultural and dairy related products along with its admin portal for catalogue, discounts etc.",
      link: "https://farmistan.in/",
    },
  ];
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              My Projects
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            {ProjectsData.map((project) => (
              <ProjectTile data={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
