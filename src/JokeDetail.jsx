import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokeDetail extends Component {
  render() {
    return (
      <div>
        <div>Joke Details:</div>
        {!this.props.joke && <div>hi</div> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    joke: state.activeJoke
  };
};

export default connect(mapStateToProps)(JokeDetail);