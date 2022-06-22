import React from "react";
//import { render } from "react-dom";
import "./mystyles.css";

class Buttons extends React.Component {
  state = {
    like: 23,
    dislike: 3,
    likeActive: false,
    dislikeActive: false
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.handleLike()}
          className={this.state.likeActive && "active"}
        >
          {this.state.like}
        </button>
        <button
          className={this.state.dislikeActive && "active"}
          onClick={() => this.handleDislike()}
        >
          {this.state.dislike}
        </button>
      </>
    );
  }
}

export default function LikeDislike2() {
  return <Buttons />;
}

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
