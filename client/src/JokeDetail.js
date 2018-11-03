import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteJoke } from './actions';

class JokeDetail extends Component {
  constructor() {
    super();

    this.state = {
      jokeContent: '',
    }
  }


  // onInputChange = (e) => {
  //   this.setState({ jokeContent: e.target.value });
  // }

  onDeleteClick() {
    this.props.deleteJoke(this.props.joke.id, () => {
      this.props.history.push('/jokes');
    });
  }

  render() {
    const { joke } = this.props;

    if (!joke) {
      return <div className="row">Please Select A Joke</div>
    }

    return <div className="joke_detail item">
        {/* <div className='joke_detail_title' >Joke</div> */}
        <div className="row">
          <div className="col">Title</div>
          <div className="col">Duration</div>
          <div className="col">Rating</div>
        </div>
        <div className="row">
          <div className="col">{joke.name}</div>
          <div className="col">{joke.minutes}:{joke.seconds} </div>
          <div className="col">{joke.rating}</div>
        </div>
        <div>{joke.content}</div>
        <button
          className="btn delete_button"
          onClick={this.onDeleteClick.bind(this)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    joke: state.activeJoke
  };
};

export default connect(mapStateToProps, {deleteJoke})(JokeDetail);