import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icons(props) {
  return (
    <div className=" measure center flex  justify-around w-100">
      {props.iconArr.map((el, idx) => (
        <a href={el.url} title={el.site} key={`icon-${idx}`}>
          <FontAwesomeIcon icon={el.icon} className="ph3" size="1x" color="#ffffff30" />
        </a>
      ))}
    </div>
  );
}
