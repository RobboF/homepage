import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/header/header";
import axios from "axios";
import Throbber from "../../components/utilities/throbber/throbber";

export default function Index() {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    try {
      const mediumRssFeed = "https://medium.com/feed/@rob.fisher_74506";
      const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
      const data = { params: { rss_url: mediumRssFeed } };
      axios.get(rssToJsonApi, data).then(rss => setPosts(rss.data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const MediumArray = () => {
    if (posts.items) {
      if (posts.items.length === 0) {
        console.log(posts.items);
        // return <p> hi</p>
        return posts.items.map(el => (
          <article className="bt bb b--black-10">
            <a
              className="db pv4 ph3 ph0-l no-underline black dim"
              href={el.link}
            >
              <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img src={el.thumbnail} className="db" alt="" />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                  <h1 className="f3 fw1 baskerville mt0 lh-title">
                    {el.title}
                  </h1>
                  <p className="f6 f5-l lh-copy">{el.abstract}</p>
                  <p className="f6 lh-copy mv0">{el.pubDate}</p>
                </div>
              </div>
            </a>
          </article>
        ));
      } else {
        return (
          <h1 className="center f5 lh-copy" > No Posts yet</h1>

        )
      }
    } else {
      return <Throbber />;
    }
  };
  return (
    <div className="page-container">
      <Header />
      <section className="mw7 center">
        <h2 className="athelas ph3 ph0-l">Recent Medium Posts</h2>
        <MediumArray />
      </section>
    </div>
  );
}
