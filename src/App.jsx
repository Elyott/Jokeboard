import React, {Component} from 'react';
import StageContainer from "./StageContainer.jsx"

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentStage: 0
    }
    this.nextStage = this.nextStage.bind(this)
    this.prevStage = this.prevStage.bind(this)
  }

  nextStage(){
    if(this.state.currentStage < 4){
      this.setState({
        currentStage: (this.state.currentStage + 1)
      })
    }
  }

  prevStage(){
    if(this.state.currentStage > 0){
      this.setState({
        currentStage: (this.state.currentStage - 1)
      })
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">JOKERNAUT</a>
          <div className="buttons">
            <div className="home_button">
              <a>New Joke</a>
            </div>
            <div className="notebook_button">
              <a>Notebook</a>
            </div>
          </div>
        </nav>
        <main className="container">
          <StageContainer currentStage={this.state.currentStage} nextStage={this.nextStage} prevStage={this.prevStage} />
        </main>

      </div>
    );
  }
}
export default App;
