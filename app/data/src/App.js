import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { useMediaQuery } from "react-responsive";
import Icons from "./Icons";
import IconsMobile from "./IconsMobile";
import {
  faLinkedin,
  faTwitter,
  faGithubSquare,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
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
    <article style={{ fontFamily: "Lato" }}>
      <div className="vh-100 dt w-100 tc bg-dark-gray white cover">
        <div className="dtc v-mid">
          <Logo fill="#ffffff60" height={isTabletOrMobile ? "90vw" : "500px"} />
          <h1 className=" f-headline-1-ns f-subheadline fw1 white-60">Robbo.xyz</h1>
         {isTabletOrMobile ? <IconsMobile iconArr={iconArr}/> : <Icons iconArr={iconArr}/>} 
        </div>
      </div>
    </article>
  );
};

export default App;
