import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeItem from './JokeItem';
import { fetchJokes } from './actions';
import _ from 'lodash';

class JokeList extends Component {

  componentDidMount() {
    this.props.fetchJokes();
  }

  renderJokeList() {
    return _.map(this.props.jokes, joke => {
      return (<JokeItem
        key={joke.id}
        joke={joke} /> )
    })
  }

  render() {
    return(
      <div className='jokeitems item'>
        <div className="title">Jokes</div>
        <div className="joke_list">
          {this.renderJokeList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
}


export default connect(mapStateToProps, { fetchJokes })(JokeList);