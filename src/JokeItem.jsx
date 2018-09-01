import React, { Component } from 'react';

export default class JokeItem extends Component {
  render() {
    return(
      <div className="joke" onClick={() => this.props.selectJoke(this.props.joke)}>
        <div className="joke_name">{this.props.joke.title}</div>
        <div className="edit">Edit</div>
      </div>
    );
  }
}