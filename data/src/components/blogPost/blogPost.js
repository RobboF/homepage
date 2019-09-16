import React from 'react'
import BlogBody from '../blogBody/blogBody'

export default function blogPost(props) {
    return (
        <article className="cf ph3 ph5-ns pv5">
        <header className="fn fl-ns w-25-ns pr4-ns">
            <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                {props.Title}
            </h1>
            <h2 className="f3 mid-gray lh-title">
             {props.Subtitle}
            </h2>
            <time className="f6 ttu tracked gray">{props.date}</time>
        </header>
        <div className="fn fl-ns w-75-ns">

            <BlogBody body={props.body}/>
        </div>
        </article>
    )
}
