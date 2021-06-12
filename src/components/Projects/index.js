import React from "react";
import ProjectTile from "./ProjectTile";

export default function Projects() {
  const ProjectsData = [
    {
      id: 1,
      title: "Price Watcher",
      imgUrl: "priceWatcher.png",
      technologiesUsed: ["ReactJS", "Node.js", "MongoDB"],
      description:
        "A webapp to keep track of prices of any product on amazon and send an email when price goes below a threshold price",
      link: "https://pricewatcher.surge.sh/",
    },
    {
      id: 2,
      title: "Zchat",
      imgUrl: "zchat.png",
      technologiesUsed: ["ReactJS", "Faker"],
      description:
        "A chat application made using react and the data is populated using the faker library.",
      link: "https://zchat1.surge.sh/",
    },
    {
      id: 3,
      title: "Quote Machine",
      imgUrl: "quoteMachine.png",
      technologiesUsed: ["ReactJS", "Redux"],
      description:
        "A webapp to view random quotes from various famous Authors to motivate daily life",
      link: "https://random-quotes-teller.surge.sh/",
    },
    {
      id: 4,
      title: "Farmistan",
      imgUrl: "Farmistan.png",
      technologiesUsed: ["ReactJS", "Firebase"],
      description:
        "An e-commerce website to sell agricultural and dairy related products along with its admin portal for catalogue, discounts etc.",
      link: "https://farmistan.in/",
    },
  ];
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap m-4 px-6">
            {ProjectsData.map((project) => (
              <ProjectTile data={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
