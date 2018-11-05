import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectJoke, deleteJoke } from './actions';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

class JokeDetail extends Component {

  onDeleteClick(id) {
    this.props.deleteJoke(id, () => {
      this.props.selectJoke(null);
      this.props.history.push('/jokes');
    });
  }

  render() {
    const { joke } = this.props;

    if (!joke) {
      return <div className="select">Please Select A Joke</div>
    }

    return <div className="joke_detail item">
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
        <div className="row">
        <div className="col">{joke.content}</div>
        </div>
        <button type="button" className="btn delete_button" data-toggle="modal" data-target=".bd-example-modal-sm">
          <i className="fa fa-trash"></i>
        </button>
        <ConfirmModal onDeleteClick={this.onDeleteClick.bind(this)} name={joke.name} jokeId={joke.id}/>
        <Link to="/updatejoke" className="btn edit_button"><i className="fa fa-edit"></i></Link>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    joke: state.activeJoke
  };
};

export default connect(mapStateToProps, {deleteJoke, selectJoke})(JokeDetail);