import React, { Component } from 'react';
import StageContainer from './StageContainer.jsx'

class NewJoke extends Component {

  constructor() {
    super();

    this.state = {
      currentStage: 0
    }
    this.nextStage = this.nextStage.bind(this)
    this.prevStage = this.prevStage.bind(this)
  }

  nextStage() {
    if (this.state.currentStage < 4) {
      this.setState({
        currentStage: (this.state.currentStage + 1)
      })
    }
  }

  prevStage() {
    if (this.state.currentStage > 0) {
      this.setState({
        currentStage: (this.state.currentStage - 1)
      })
    }
  }

  render() {
    return (
      <div>
        <main className="container">
          <StageContainer currentStage={this.state.currentStage} nextStage={this.nextStage} prevStage={this.prevStage} />
        </main>
      </div>
    );
  }
}
export default NewJoke;