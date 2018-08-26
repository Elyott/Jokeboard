import React, { Component } from 'react';

import JokeItems from './JokeItems.jsx';

class JokeBook extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="jokebook_container">
        <div className="title">JokeBook</div>
        <JokeItems />
        <button className="add_joke_btn">Add New Joke</button>
      </div>;
  }
}

export default JokeBook;