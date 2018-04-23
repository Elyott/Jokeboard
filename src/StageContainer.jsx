import React, {Component} from 'react';
import StageZero from "./StageZero.jsx"
import StageOne from "./StageOne.jsx"
import StageTwo from "./StageTwo.jsx"
import StageThree from "./StageThree.jsx"
import StageFour from "./StageFour.jsx"


class StageContainer extends Component {
  render() {
    switch(this.props.currentStage){
      case 0:
        return (<StageZero nextStage={this.props.nextStage} />)
        break;
      case 1:
        return (<StageOne nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>)
        break;
      case 2:
        return (<StageTwo nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>)
        break;
      case 3:
        return (<StageThree nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>)
        break;
      case 4:
        return (<StageFour nextStage={this.props.nextStage} prevStage={this.props.prevStage}/>)
    }
  }
}
export default StageContainer;