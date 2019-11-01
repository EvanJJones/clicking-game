import React, { Component } from "react";
import ScoreBar from "./components/ScoreBar";
import Image from "./components/Image.js";
import images from "./images.json";
import Container from "./components/Container.js"
import Rules from "./components/Rules.js"
class App extends Component {
  state = {
    images,
    clicked: [],
    score: 0,
    hiScore: 0,
    rulesRead: false
  }

  clickImage = (id) => {
    if (this.state.clicked.includes(id)){
      console.log('you lose');
      
      this.setState({score: 0, clicked: []})
    }else {
      const newScore = this.state.score + 1;
      const clicked = this.state.clicked
      clicked.push(id);
      if (newScore >= this.state.hiScore) {
        this.setState({hiScore: newScore})
      }
      
      this.setState({clicked, score: newScore});
    }

    this.shuffleImages();
  };

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
          hiScore={this.state.hiScore}
        />
        <Container>
          {this.state.images.map((image) => (
            <Image 
              src={image.src}
              key={image.id}
              id={image.id}
              clickImage={this.clickImage}
            />
          ))}
        </Container>
      </div>
      
    );
  }
}

export default App;
