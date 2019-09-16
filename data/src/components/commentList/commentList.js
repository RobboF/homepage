import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CommentItem from '../commentItem/commentItem'
function CommentList(props) {
    // const title = props.match.params.paramTitle.replace(/-/g, " ")
    const { loading, error, data } = useQuery(gql`
    {
        comments(where: {projectId: {_eq: "${props.projectId}"}}) {
          comment
          date
          id
          projectId
          username
        }
      }
      
    `);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(data)
    if (data.comments.length > 0){

      return data.comments.map(comment => (
        <CommentItem comment={comment} key={comment.id} />
        ))
    } else {
      return (
        <header class="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
        <h1 class="f3 tc pb4 fw1 ">No Comments</h1>
      </header>
      )

    }
        // return "hi"
  }
  export default CommentList