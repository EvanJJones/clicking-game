import React, { Component } from "react";

class Image extends Component {
  state = {
    // whether the card is flipped or not
    flipped: false,
    // whether the card is matched or not
    matched: false,
    lastClicked: 0
  };

  clickImage = (id, match) => {
    if (this.state.lastClicked === 0) {
      this.setState({ lastClicked: id });
    } else if (this.state.lastClicked === match) {
      this.setState({ lastClicked: 0, matched: true });
    } else {
      this.setState({ lastClicked: 0 });
    }
  };

  flipCard = () => {
    console.log(this.props.id);
    this.setState({ flipped: true });
  };
  render() {
    return (
      <img
        src={this.props.flipped ? this.props.src : this.props.back}
        alt={this.props.alt}
        width="16.5%"
        className="img-thumbnail"
        onClick={() => this.props.clickImage(this.props.id, this.props.match)}
      ></img>
    );
  }
}

export default Image;
