import React from "react";
// the container that has the rules

const styles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#fdff8f",
  margin: "1rem 0 1rem 0",
  padding: "1rem"
};
function ScoreBar(props) {
  return (
    <div style={styles}>
      <h2>Rules</h2>
      <ul>
        <li>Click a card to reveal what it is</li>
        <li>Click another card to try and create a match</li>
        <li>
          if they match they will stay flipped, otherwise they will flip back
          when you click again
        </li>
      </ul>
      <button onClick={props.markedRead}>Done Reading</button>
    </div>
  );
}

export default ScoreBar;
