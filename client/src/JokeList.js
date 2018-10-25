import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeItem from './JokeItem';
import { fetchJokes } from './actions/index';
// import { bindActionCreators } from 'redux';
import _ from 'lodash';

class JokeList extends Component {
    constructor() {
    super();

    this.state = { response: [] };
  }

  componentDidMount() {
    this.props.fetchJokes();
  }

  renderJokeList() {
    return _.map(this.props.jokes, joke => {
      return (<JokeItem
        key={joke.name}
        joke={joke} /> )
    })
  }

  render() {
    return(
      <div className='jokeitems item'>
        <div>Jokes</div>
        {this.renderJokeList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//       fetchJokes
//     },
//     dispatch
//   );

export default connect(mapStateToProps, { fetchJokes })(JokeList);