import React, { Component } from 'react';
import JokeList from './JokeList.jsx';
import JokeDetail from './JokeDetail.jsx';

class JokeBook extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className='jokebook_container'>
          <div className='title'>Joke Book</div>
          <JokeList />
          <button className='add_joke_btn'>Add New Joke</button>
        </div>
        <JokeDetail />
      </div>
    );
  }
}

export default JokeBook;