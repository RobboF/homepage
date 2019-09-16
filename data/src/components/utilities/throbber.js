import throbber from "./throbber.png"
import React from 'react';

function Throbber(props) {
    return (
        <section className="mw5 mw7-ns center  pa5 ph5-ns flex items-center">
            <img className="center" alt="Throbber" src={throbber}></img>
        </section>
    )
}   

export default Throbber