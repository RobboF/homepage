import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BlogPost from '../../components/blogPost/blogPost'
import ArticleNav from '../../components/articleNav/articleNav'
import CommentList from '../../components/commentList/commentList'
import AddComment from '../../components/addComment/addComment'
import Throbber from '../../components/utilities/throbber/throbber.js'
// import { ToastContainer, toast } from 'react-toastify';

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
  
    if (loading) return <Throbber/>;
    if (error) return <p>Error :(</p>;
    const returnedObject = data.blogPosts[0]
    return (
        <div>
             
            <ArticleNav/>
            <BlogPost Title={returnedObject.Title} Subtitle={returnedObject.Subtitle} date={returnedObject.date} body={parseForNewLines(returnedObject.Body)}/>
            <h1 className="ph5 f2 fw9 mb3 mt0 pt3">Comments:</h1>
            <CommentList projectId={returnedObject.uuid}/>
            <AddComment projectId={returnedObject.uuid}/>
        </div>
    )
  }
  export default Article