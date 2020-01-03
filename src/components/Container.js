import React from "react";

// container that holds everything else

const styles = {
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap"
};
function Container(props) {
  return <div style={styles}>{props.children}</div>;
}

export default Container;
