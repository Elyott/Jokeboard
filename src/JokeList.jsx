import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeItem from './JokeItem.jsx';
import { selectJoke } from './actions/index'
import { bindActionCreators } from 'redux';

class JokeList extends Component {
  renderJokeList() {
    return this.props.jokes.map((joke) => {
      return (<JokeItem
        key={joke.title}
        selectJoke={this.props.selectJoke}
        joke={joke} /> )
    })
  }

  render() {
    return <div className="jokeitems">
        {this.renderJokeList()}
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
}

const mapDispatchToProps = dispatch => {
  return {selectJoke: selectJoke(dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(JokeList);