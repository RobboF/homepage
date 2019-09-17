import outerCircle from "./outerCircle.png"
import middleCircle from "./middleCircle.png"
import innerCircle from "./innerCircle.png"

import React from 'react';
import "./throbber.css"

function Throbber(props) {
    return (
        <section className="mw5 mw7-ns center pa5 ph5-ns flex items-center">
            <div className="center">
                <div className="container_row">
                    {/* <img className="center" alt="Throbber" src={throbber}></img> */}
                    <img alt="outer" class="circle-1" src={outerCircle}></img>
                    <img alt="middle" class="circle-2" src={middleCircle}></img>
                    <img alt="inner" class="circle-3" src={innerCircle}></img>
                </div>
            </div>

        </section>
    )
}   

export default Throbber