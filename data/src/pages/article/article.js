import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BlogPost from '../../components/blogPost/blogPost'
import ArticleNav from '../../components/articleNav/articleNav'
function parseForNewLines(body) {
    return body.split(/\\n/)
     
 }
function Article(props) {
    const title = props.match.params.paramTitle.replace(/-/g, " ")
    const { loading, error, data } = useQuery(gql`
    {
        blogPosts(where: {Title: {_eq: "${title}"}}) {
          Abstract
          Title
          Body
          Subtitle
          date
          uuid
        }
      }
    `);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const returnedObject = data.blogPosts[0]
    return (
        <div>
            <ArticleNav/>
            <BlogPost Title={returnedObject.Title} Subtitle={returnedObject.Subtitle} date={returnedObject.date} body={parseForNewLines(returnedObject.Body)}/>
        </div>
    )
  }
  export default Article