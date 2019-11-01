import React from "react";

function ScoreBar(props) {
  return (
    <ul className="nav">
      <li className="nav-item">
        {props.score}
      </li>
    </ul>
  );
}

export default ScoreBar;
