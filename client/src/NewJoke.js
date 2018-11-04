import React, { Component } from 'react';
import JokeForm from './JokeForm';

class NewJoke extends Component {

  render(){
    return (
      <div className="newjoke_container">
        <div className="form-group">
          <div className="newjoke_title">Create A New Joke</div>
          <JokeForm history={this.props.history}/>
        </div>
      </div>
    );
  }
}

export default NewJoke;