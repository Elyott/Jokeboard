import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJoke } from './actions/index';

 class JokeItem extends Component {
  render() {
    return(
      <div className='joke' onClick={() => this.props.selectJoke(this.props.joke)}>
        <div className='joke_name'>{this.props.joke.name}</div>
      </div>
    );
  }
}


export default connect(null, {selectJoke})(JokeItem);