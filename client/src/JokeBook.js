import React, { Component } from 'react';
import JokeList from './JokeList';
import JokeDetail from './JokeDetail';
import { Link } from 'react-router-dom';

class JokeBook extends Component {

  render() {
    return (
      <div className='jokebook_container'>
        <div className='title'>Joke Book</div>
        <div className='container' >
            <JokeList />
            <JokeDetail history={this.props.history}/>
        </div>
        <Link to="/newjoke" className="add_joke_btn">Add New Joke</Link>
      </div>
    );
  }
}

export default JokeBook;