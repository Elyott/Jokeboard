import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokeDetail extends Component {
  render() {
    return (
      <div className="jokebook_container joke_detail">
        {this.props.joke &&
          <div>
            <div>Joke Details:</div>
            <div>Title: {this.props.joke.title}</div>
            <div>Duration: {this.props.joke.duration}</div>
            <div>Rating: {this.props.joke.rating}</div>
            <div>Content: {this.props.joke.content}</div>
          </div>
        }
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