import React, {useState} from 'react'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag'


const POST_MUTATION = gql`
    mutation insert_comments($comment: String!, $username: String!, $projectId: uuid!) {
        insert_comments(objects: {comment: $comment, projectId: $projectId, username: $username}) {
        affected_rows
        }
    }
`

const AddComment = (props) => {
  const [addTodo] = useMutation(POST_MUTATION);
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const HandleSubmit = (username, comment, projectId) => {
    console.log("username: ", username)
    console.log("comment: ", comment)
    console.log("projectId: ", projectId)
    addTodo({ variables: { username: username, comment: comment, projectId: projectId}})
    
  }
  return (

    <div className=" pa4 black-80 flex flex-column center ba mw7-ns">
      <label htmlFor="name" className="f6 b db mb2 mw3-ns">Name </label>
      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" onChange={e => setUsername(e.target.value)}/>
      {/* <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small> */}
      <label htmlFor="comment" className="f6 b db mb2">Comments </label>
      <textarea id="comment" name="comment" className="db border-box hover-black w-100 ba b--black-20 pa2 mb2" aria-describedby="comment-desc" onChange={e => setComment(e.target.value)}></textarea>
      {/* <small id="comment-desc" className="f6 black-60">Helper text for a form control. Can use this text to <a href="#" className="link underline black-80 hover-blue">link to more info.</a></small> */}
      <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" onClick={() => HandleSubmit(username, comment, props.projectId)}/></div>
    </div>
    );
  }
  export default AddComment
  // <div>
  //   <form
  //     onSubmit={e => {
  //       e.preventDefault();
  //       addTodo({ variables: { username: username.value, comment: comment.value, projectId: props.projectId } });
  //       // input.value = '';
  //     }}
  //   >
  //     <input
  //       ref={node => {
  //         username = node;
  //         console.log(node)
  //       }}
  //     />
  //     <input
  //       ref={node => {
  //         comment = node;
  //       }}
  //     />
  //     <button type="submit">Add Todo</button>
  //   </form>
  // </div>