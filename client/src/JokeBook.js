import React, { Component } from 'react';
import JokeList from './JokeList';
import JokeDetail from './JokeDetail';
import { Link } from 'react-router-dom';

class JokeBook extends Component {

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className='col-3'>
            <div className='joke_container'>
              <JokeList />
              <Link to="/newjoke" className="add_joke_btn">New Joke  <i className="	fa fa-plus"></i></Link>
            </div>
          </div>
          <div className='jokebook_container col'>
            <div>
            <div className='title'>Joke Book</div>
              <div className='container'>
                <JokeDetail history={this.props.history}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JokeBook;