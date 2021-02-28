import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconsMobile(props) {
  return (
    <div className=" measure center flex flex-wrap justify-around w-100 fixed bottom-0 pb3">
      {props.iconArr.map((el, idx) => (
        <a href={el.url} title={el.site} key={`icon-${idx}`}>
          <FontAwesomeIcon icon={el.icon} size="3x" color="#ffffff30" />
        </a>
      ))}
    </div>
  );
}
