import React, { Component } from 'react';
import JokeForm from './JokeForm';
import { connect } from 'react-redux';
import { updateJoke, selectJoke } from './actions';

class UpdateJoke extends Component {

  onSubmit = (values) => {
    // values["user_id"] = 2;
    this.props.updateJoke(values, (joke) => {
      this.props.selectJoke(joke);
      this.props.history.push('/jokes');
    });
  }


  render(){
    return (
      <div className="newjoke_container">
        <div className="form-group">
          <div className="newjoke_title">Update Joke</div>
          <JokeForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default connect(null,{ updateJoke, selectJoke })(UpdateJoke);