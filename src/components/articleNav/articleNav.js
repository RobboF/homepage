import React from 'react'
import logo from "../../images/logo.jpg"
export default function articleNav() {
    return (
        <nav class="db dt-l w-100 border-box pa3 ph5-l">
        <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
            <img src={logo} class="dib w3 h3 br-100" alt="Site Name"/>
        </a>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/" title="Home">Home</a>
            <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/portfolio" title="How it Works">Portfolio</a>
            <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/about" title="Blog">About</a>
            <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="/contact">Contact</a>
        </div>
        </nav>
    )
}
