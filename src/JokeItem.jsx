import React, { Component } from 'react';

class JokeItem extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="joke">
        <div className="joke_name">{this.props.joke.title}</div>
        <div className="edit">Edit</div>
      </div>;
  }
}

export default JokeItem;
