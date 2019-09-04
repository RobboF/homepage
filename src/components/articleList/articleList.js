import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react'

import ArticleSnippet from '../../components/article-snippet/articleSnippet'

function ArticleList() {
    const { loading, error, data } = useQuery(gql`
        {
              blogPosts {
                uuid
                Abstract
                Title
                date
              }
            }
    `);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.blogPosts.map((el, idx) => (
      <ArticleSnippet title={el.Title} date={el.date} abstract={el.Abstract} key={idx}/>
    ));
  }
  export default ArticleList