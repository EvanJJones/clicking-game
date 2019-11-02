import React from "react";

const mainStyle = {
  width: "100%",
  height: "75px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#00b3b3"
}

const elementStyle = {
  width: "30%",
  textAlign: "center"
}
function ScoreBar(props) {
  return (
    <div style={mainStyle}>
      <h1>Score: {props.score}</h1>
      <h2 style={elementStyle}>{props.message}</h2>
      <h1>High-Score: {props.hiScore}</h1>
    </div>
  );
}

export default ScoreBar;
