import React from 'react';

function commentItem(props) {
    return (
        <article className="center mw8 mw8-ns br3 hidden ba b--black-10 mv4">
        <div className="flex justify-between f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{props.comment.username}</h1>
            <h2 className="f5 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{props.comment.date}</h2>
        </div>
        <div className="pa3 bt b--black-10">
            <p className="f6 f5-ns lh-copy measure">
            {props.comment.comment}
            </p>
        </div>
        </article>
    );
}

export default commentItem;