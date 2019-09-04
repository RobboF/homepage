import React from 'react'

export default function blogBody(props) {

    return props.body.map((el, idx) => (

        <p key={idx} className="f5 lh-copy  mt0-ns w-75-ns">
            {el}
        </p>
    )
    )
    
}
