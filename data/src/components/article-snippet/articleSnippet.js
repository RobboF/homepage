import React from 'react'
export default function ArticleSnippet(props) {
    return (
        <article className="bt bb b--black-10" >
        <a className="db pv4 ph3 ph0-l no-underline black dim" href={ '/blog/' + props.title.replace(/ /g, "-")}>
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="https://i.imgur.com/fN7zY49.jpg" className="db" alt=""/>
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">{props.title}</h1>
              <p className="f6 f5-l lh-copy">
                {props.abstract}
              </p>
              <p className="f6 lh-copy mv0">{props.date}</p>
            </div>
          </div>
        </a>
      </article>
    );
    // return <p> hi </p>
  }

  

