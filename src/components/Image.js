import React from "react";

function Image(props) {
  return (
    <img src={props.src} alt={props.alt} width={175} className="img-thumbnail" onClick={() => props.clickImage(props.id)}></img>
  );
}

export default Image;
