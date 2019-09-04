import React from 'react'
import Header from '../../components/header/header'
export default function about() {
    return (
        <div>
            <Header/>
            <article class="cf ph3 ph5-ns pv5">
                <header class="fn fl-ns w-50-ns pr4-ns">
                    <h1 class="mb3 mt0 lh-title">About Me</h1>
                    <time class="f6 ttu tracked gray">Rob Fisher</time>
                </header>
                <div class="fn fl-ns w-50-ns">
                    <p class="lh-copy measure mt4 mt0-ns">
                        I've always hated these kind of about me sections, What can you write without sounding like some sort of narcissist?
                    </p>
                    <p class="lh-copy measure mt4 mt0-ns">
                        My background is largely in security, with a degree in Forensic computing and a time spent in industry, both in the practical security sphere as a SOC analyst, and the compliance side.
                    </p>
                    <p class="lh-copy measure mt4 mt0-ns">
                        During this time I was introduced to the wonderful world of DevOps and started to transition to it
                    </p>
                    <p class="lh-copy measure mt4 mt0-ns">
                        I love the idea that with a single button click you can trigger a pipeline that will build, test, and deploy an entire application. 
                        That is to say nothing of containerisation technology, the ability to use one bit of tin to run countless applications, both spinning up and dying with the functions have been performed.
                    </p>
                    <p class="lh-copy measure mt4 mt0-ns">
                        If you want discuss anything, hit me up <a href="/contact">Here</a>
                    </p>
                </div>
            </article>
        </div>
    )
}
