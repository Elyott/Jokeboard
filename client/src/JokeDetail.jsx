import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokeDetail extends Component {
  constructor() {
    super();

    this.state = {
      jokeContent: '',
    }
  }



  onInputChange = (e) => {
    this.setState({ jokeContent: e.target.value });
  }

  render() {
    return <div className="joke_detail item">
        {/* <div className='joke_detail_title' >Joke</div> */}
        <div className="row">
          <div className="col">Title</div>
          <div className="col">Duration</div>
          <div className="col">Rating</div>
        </div>
        <div className="row">
          <div className="col">{this.props.joke && this.props.joke.title}</div>
          <div className="col">{this.props.joke && this.props.joke.duration}</div>
          <div className="col">{this.props.joke && this.props.joke.rating}</div>
        </div>
        <div>{this.props.joke && this.props.joke.content}</div>
        {/* <div>Title: {this.props.joke && this.props.joke.title}</div>
        <div>Duration: {this.props.joke && this.props.joke.duration}</div>
        <div>Rating: {this.props.joke && this.props.joke.rating}</div>
        <div>{this.props.joke && this.props.joke.content}</div> */}
      <input id='joke_content' onChange={this.onInputChange} value={this.state.jokeContent}/>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    joke: state.activeJoke
  };
};

export default connect(mapStateToProps)(JokeDetail);