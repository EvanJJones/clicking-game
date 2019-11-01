import React from "react";

const styles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#fdff8f",
  margin: "1rem 0 1rem 0",
  padding: "1rem"

}
function ScoreBar(props) {
  return (
    <div style={styles}>
      <h2>Rules</h2>
      <ul>
        <li>Click as many cards as you can without clicking the same card twice</li>
        <li>The game resets when you click the same car twice in one game</li>
        <li>The board will shuffle each time you click a card</li>
      </ul>
      <button onClick={props.markedRead}>Done Reading</button>
    </div>
  );
}

export default ScoreBar;
