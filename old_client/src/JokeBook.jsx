import React, { Component } from 'react';
import JokeList from './JokeList.jsx';
import JokeDetail from './JokeDetail.jsx';

class JokeBook extends Component {

  render() {
    return (
      <div className='jokebook_container'>
        <div className='title'>Joke Book</div>
        <div className='container' >
            <JokeList />
            <JokeDetail />
        </div>
        <button className='add_joke_btn'>Add New Joke</button>
      </div>
    );
  }
}

export default JokeBook;