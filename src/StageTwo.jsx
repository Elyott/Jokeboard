import React, {Component} from 'react';
import NavButtons from './NavButtons.jsx'

class StageTwo extends Component {
  render() {
    return (
          <div className="stage">
            <div className="stage_header">
              <span className="stage_title">Stage Two | Brainstorm</span>
            </div>
            <div className="main_area">
              <textarea className="input brainstorm" placeholder="Write everything..."/>
            </div>
            <NavButtons nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>
          </div>
    );
  }
}
export default StageTwo;