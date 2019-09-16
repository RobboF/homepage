import React from 'react'
import { useSubscription } from '@apollo/react-hooks';
import commentSubscription from '../utilities/commentSubscription.js'
// import { gql } from 'apollo-boost';

import CommentItem from '../commentItem/commentItem'
function CommentList(props) {
    // const title = props.match.params.paramTitle.replace(/-/g, " ")
    const { loading, error, data } = useSubscription(commentSubscription, {})
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        console.log(error)
        console.log(loading)
    if (data.comments.length > 0){

      return data.comments.map(comment => (
        <CommentItem comment={comment} key={comment.id} />
        ))
    } else {
      return (
        <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
        <h1 className="f3 tc pb4 fw1 ">No Comments</h1>
      </header>
      )

    }
        // return "hi"
  }
  export default CommentList