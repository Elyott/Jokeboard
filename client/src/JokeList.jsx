import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeItem from './JokeItem.jsx';

class JokeList extends Component {
  renderJokeList() {
    return this.props.jokes.map((joke) => {
      return (<JokeItem
        key={joke.title}
        joke={joke} /> )
    })
  }

  render() {
    return <div className='jokeitems item'>
        {this.renderJokeList()}
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps)(JokeList);