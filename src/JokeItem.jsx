import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJoke } from './actions/index';
import { bindActionCreators } from 'redux';

 class JokeItem extends Component {
  render() {
    return(
      <div className='joke' onClick={() => this.props.selectJoke(this.props.joke)}>
        <div className='joke_name'>{this.props.joke.title}</div>
        <div className='edit'>Edit</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectJoke
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(JokeItem);