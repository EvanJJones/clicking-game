import React from "react";

const styles = {
  width: "100%",
  height: "75px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#00b3b3"

}
function ScoreBar(props) {
  return (
    <div style={styles}>
      <h1>Score: {props.score}</h1>
      <h1>High-Score: {props.hiScore}</h1>
    </div>
  );
}

export default ScoreBar;
