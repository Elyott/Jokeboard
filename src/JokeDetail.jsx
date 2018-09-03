import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokeDetail extends Component {
  render() {
    return (
      <div className='joke_detail'>
        <div className='joke_detail_title' >Joke</div>
        <div>Title: {this.props.joke && this.props.joke.title}</div>
        <div>Duration: {this.props.joke && this.props.joke.duration}</div>
        <div>Rating: {this.props.joke && this.props.joke.rating}</div>
        <div>Content: {this.props.joke && this.props.joke.content}</div>
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