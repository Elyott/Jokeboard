import React, {Component} from 'react';


class NavButtons extends Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
  }

  onNext(e) {
    e.preventDefault();
    this.props.nextStage()
  }

  onPrev(e) {
    e.preventDefault();
    this.props.prevStage()
  }

  render() {
    return (
      <div className="stage_footer">
        <button onClick={this.onPrev} className="process prev_button"><span className="glyphicon glyphicon-chevron-left"></span>Prev Stage</button>
        <button onClick={this.onNext} className="process next_button">Next Stage<span className="glyphicon">&#xe080;</span></button>
      </div>
    );
  }
}
export default NavButtons;




