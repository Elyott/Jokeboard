import React, {Component} from 'react';
import NavButtons from './NavButtons.jsx'

class TopicQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      questions: {
        0: 'We are going to start by finding some topics to write about.',
        1: 'What are a few of your hobbies and why do you like them?',
        2: 'Second Question',
        3: 'Third Question',
        4: 'Forth Question',
        5: 'Pick A Topic'
      }
    }

    this.onBackStep = this.onBackStep.bind(this);
    this.onNextStep = this.onNextStep.bind(this);
  }

  onNextStep(e) {
    e.preventDefault();
    this.setState({
      step: this.state.step + 1
    })
  }

  onBackStep(e) {
    e.preventDefault();
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    const button = (this.state.step === 0) ? ("Let's Start Finding A Topic!") : ("Next Question")
    const textarea = ((this.state.step > 0 && this.state.step < 5) && <textarea className="input answer" placeholder="Write everything..."/>)
    const nextQuestion = (this.state.step < 5 &&
      (<button onClick={this.onNextStep} className="process next_question">{button}
      <span className="glyphicon">&#xe080;</span>
      </button>))
    const backQuestion = (this.state.step > 0 && <button onClick={this.onBackStep} className="process back_question">Back</button>)


    return (

      <div>
        <div className="main_area">
          <div className="main_question_area">
            <span className="question_title">{this.state.questions[this.state.step]}</span>
            {textarea}
          </div>
          <div>
          {backQuestion}
          {nextQuestion}
          </div>
          </div>
          <NavButtons nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>
        </div>


    );
  }
}
export default TopicQuestions;