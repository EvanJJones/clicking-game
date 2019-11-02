import React, {Component} from "react";

class Image extends Component {
  state = {
    flipped: false,
    matched: false
  }

  flipCard = () => {
    console.log(this.props.id);
    this.setState({flipped: true})
  }
  render() {
    return (

    <img src={this.state.flipped ? this.props.src : this.props.back} alt={this.props.alt} width="16.5%" className="img-thumbnail" onClick={() => {
      this.props.clickImage(this.props.id)
      this.flipCard()
    }}></img>
    )
  }
}

export default Image;
