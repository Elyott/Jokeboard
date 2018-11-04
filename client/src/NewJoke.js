import React, { Component } from 'react';
import JokeForm from './JokeForm';
import { connect } from 'react-redux';
import { createJoke, selectJoke } from './actions';

class NewJoke extends Component {

  onSubmit = (values) => {
    values["user_id"] = 2;
    this.props.createJoke(values, (joke) => {
      this.props.selectJoke(joke);
      this.props.history.push('/jokes');
    });
  }

  render(){
    return (
      <div className="newjoke_container">
        <div className="form-group">
          <div className="newjoke_title">Create A New Joke</div>
          <JokeForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default connect(null,{ createJoke, selectJoke })(NewJoke);