import React from 'react'
import logo from "../../images/logo.jpg"
export default function articleNav() {
    return (
        <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
            <img src={logo} className="dib w3 h3 br-100" alt="Site Name"/>
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/portfolio" title="How it Works">Portfolio</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/about" title="Blog">About</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/contact">Contact</a>
        </div>
        </nav>
    )
}
