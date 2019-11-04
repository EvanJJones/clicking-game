import React, { Component } from "react";
import ScoreBar from "./components/ScoreBar";
import Image from "./components/Image.js";
import images from "./memoryImages.json";
import Container from "./components/Container.js"
import Rules from "./components/Rules.js"

class App extends Component {
  state = {
    images,
    lastClicked: 0,
    score: 0,
    hiScore: 0,
    rulesRead: false,
    count: 0,
    message: ""
  }

  componentDidMount() {
    this.shuffleImages();
  }

  clickImage = (id, match) => {
    if (this.state.count >= 2){
      const images = this.state.images.map((image) => {
        if (image.matched === false && image.flipped === true) {
          image.flipped = false;
        }
        return image;
      });
      this.setState({images});
    }
    this.flipImage(id);

    // if first click
    if (this.state.lastClicked === 0) {
      this.setState({lastClicked: id, count: 1});

      // if correct match
    } else if (this.state.lastClicked === match) {
      const images = this.state.images.map((image) => {
        if (image.id === id || image.id === match) {
          image.matched = true;
        }
        return image;
      });
      this.setState({lastClicked: 0, images, count: 0});

      // if second click is not a match
    } else if (id !== this.state.lastClicked) {
      this.setState({lastClicked: 0, count: 2});
    }

  };

  flipImage = (id, id2) => {
    const images = this.state.images.map((image) => {
      if ((image.id === id || image.id === id2) && !image.matched) {
        image.flipped = true;
      }
      return image;
    })
    this.setState({images});
  };

  flipImageBack = (id, id2) => {
    const images = this.state.images.map((image) => {
      if ((image.id === id || image.id === id2) && !image.matched) {
        image.flipped = false;
      }
      return image;
    })
    this.setState({images});
  }
  shuffleImages = () => {
    const images = this.state.images;

    // shuffle from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for(let i = images.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = images[i]
      images[i] = images[j]
      images[j] = temp
    }

    this.setState({images});
    
  };

  markedRead = () => {
    this.setState({rulesRead: true})
  }

  loseGame = () => {
    this.setState({score: 0, clicked: [], message: "You Lost"})
  }

  render() {
    return (
      
      <div className="container">
        {this.state.rulesRead ? (
          null
        ) : (
          <Rules 
            markedRead={this.markedRead}
          />
        )}
        <ScoreBar 
          score={this.state.score}
          message={this.state.message}
          hiScore={this.state.hiScore}
        />
        <Container>
          {this.state.images.map((image) => (
              <Image 
                src={image.src}
                back={image.back}
                key={image.id}
                id={image.id}
                match={image.match}
                flipped={image.flipped}
                matched={image.matched}
                clickImage={this.clickImage}
              />
          ))}
        </Container>
      </div>
      
    );
  }
}

export default App;
