import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithubSquare,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

export default function IconsMobile() {
  const iconArr = [
    { site: "Twitter", url: "https://twitter.com/RobboRob", icon: faTwitter },
    {
      site: "LinkedIn",
      url: "https://www.linkedin.com/in/robbo-fisher/",
      icon: faLinkedin,
    },
    {
      site: "Dockerhub",
      url: "https://hub.docker.com/u/robbof",
      icon: faDocker,
    },
    {
      site: "Github",
      url: "https://github.com/RobboF",
      icon: faGithubSquare,
    },
  ];
  return (
    <div class=" measure center flex flex-wrap justify-around w-100 fixed bottom-0 pb3">
      {
          iconArr.map((el) => (
            <a href={el.url} title={el.site}>
              <FontAwesomeIcon icon={el.icon} size="3x" color="#ffffff30" />
            </a>
          ))
      }
    </div>
  );
}
