import React from 'react'
import logo from '../../images/logo.png'
export default function header() {
    return (
        <header className="tc pv4 pv5-ns">
            <img src={logo} className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar"/>
            <h1 className="mt2 mb0 baskerville i fw1 f1">Robbo.xyz</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">My humble corner of the internet</h2>
            <nav className="bt bb tc mw7 center mt4">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Portfolio</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">About</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
            </nav>
        </header>
    )
}
