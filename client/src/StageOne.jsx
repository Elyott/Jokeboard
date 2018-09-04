import React, {Component} from 'react';
import NavButtons from './NavButtons.jsx'
import TopicQuestions from './TopicQuestions.jsx'

class StageOne extends Component {
  render() {
    return (
      <div className="stage">
        <div className="stage_header">
          <span className="stage_title">Stage One | Find A Topic</span>
        </div>

          <TopicQuestions nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>

      </div>
    );
  }
}
export default StageOne;