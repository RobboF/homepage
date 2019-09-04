import React from 'react'
import Header from '../../components/header/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDocker } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function social() {
    return (
        <div>
            <Header/>
            <div className="pv4 ph3 ph5-ns mt4 tc">
            <a className="link near-black hover-silver dib h3 w3 mh4" href="https://hub.docker.com/u/robbof" title="DockerHub">
                <FontAwesomeIcon icon={faDocker} size="5x" />
            </a>
            <a className="link near-black hover-silver dib h3 w3 mh4" href="https://github.com/RobboF" title="GitHub">
                <FontAwesomeIcon icon={faGithub} size="5x" />
            </a>
            <a className="link hover-silver near-black dib h3 w3 mh4" href="https://www.linkedin.com/in/robbo-fisher/" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </a>
            <a className="link hover-silver near-black dib h3 w3 mh4" href="https://twitter.com/RobboRob" title="LinkedIn">
                <FontAwesomeIcon icon={faTwitter} size="5x" />
            </a>
            </div>
        </div>
    )
}
