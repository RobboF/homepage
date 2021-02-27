import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithubSquare,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
function App() {
  return (
    <article style={{ fontFamily: "Lato" }}>
      <div
        class="vh-100 dt w-100 tc bg-dark-gray white cover"
        // style={{ backgroundImage: `url(http://mrmrs.github.io/photos/u/009.jpg)`, backgroundRepeat: "no-repeat" }}
      >
        <div class="dtc v-mid">
          <Logo fill="#ffffff99" height="25vh" />
          <h1 class=" f-headline-l fw1 white-60">Robbo.xyz</h1>
          <div class=" measure center flex justify-around w-100">
            <a href="https://www.linkedin.com/in/robbo-fisher/" title="LinkedIn">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="5x"
                color="#ffffff30"
              />
            </a>
            <a href="https://twitter.com/RobboRob" title="Twitter">
              <FontAwesomeIcon
                color="#ffffff30"
                icon={faTwitter}
                size="5x"
              />
            </a>
            <a href="https://github.com/RobboF" title="Github">
              <FontAwesomeIcon
                color="#ffffff30"
                icon={faGithubSquare}
                size="5x"
              />
            </a>
            <a href="https://hub.docker.com/u/robbof" title="DockerHub">
              <FontAwesomeIcon color="#ffffff30" icon={faDocker} size="5x" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default App;
