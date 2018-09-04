import React, {Component} from 'react';
import NavButtons from './NavButtons.jsx'

class StageFour extends Component {
  render() {
    return (
          <div className="stage">
            <div className="stage_header">
              <span className="stage_title">Stage Four | Refine Jokes</span>
            </div>
            <div className="main_area">
              <input className="input" placeholder="Enter A Topic"/>
            </div>
            <NavButtons nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>
          </div>
    );
  }
}
export default StageFour;