import React, { Component } from 'react';
import JokeList from './JokeList.jsx';
import JokeDetail from './JokeDetail.jsx';

class JokeBook extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='jokebook_container'>
        <div className='title'>Joke Book</div>
        <div className='container' >
          <div className='item'>
            <JokeList />
            <button className='add_joke_btn'>Add New Joke</button>
          </div>
          <div className='item' >
            <JokeDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default JokeBook;