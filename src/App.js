import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.css";
import {
  faLinkedin,
  faTwitter,
  faGithubSquare,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const App = () => {
  return (
    <div className="App">
      <Logo data-testid='logo' fill="#FFFFFF60" height="50vh"/>
      <div className="IconsWrapper">
        <FontAwesomeIcon className="Icon" onClick={() => {window.open("https://www.linkedin.com/in/robbo-fisher/")}}  icon={faLinkedin} color="#ffffff30" size="2x"/>
        <FontAwesomeIcon className="Icon" onClick={() => {window.open("https://twitter.com/TheSkrubbie")}} icon={faTwitter} color="#ffffff30" size="2x"/>
        <FontAwesomeIcon className="Icon" onClick={() => {window.open("https://github.com/RobboF")}} icon={faGithubSquare} color="#ffffff30" size="2x"/>
        <FontAwesomeIcon className="Icon" onClick={() => {window.open("https://hub.docker.com/u/robbof")}} icon={faDocker} color="#ffffff30" size="2x"/>
      </div>
    </div>
  );
}

export default App;
