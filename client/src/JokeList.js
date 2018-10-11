import React, { Component } from 'react';
import { connect } from 'react-redux';
import JokeItem from './JokeItem';
import { fetchJokes } from './actions/index';
import { bindActionCreators } from 'redux';

class JokeList extends Component {
    constructor() {
    super();

    this.state = { response: [] };
  }

    componentDidMount() {

      fetch("http://localhost:5000/api/jokes")
        .then(results => {
          console.log(results);
          return results.json();
        })
        .then(data => {
          console.log(data);
          this.setState({
            response: data
          });
        });
      // this.callApi()
      //   .then(res => this.setState({ response: res.express }))
      //   .catch(err => console.log(err));
    }

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

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      fetchJokes
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(JokeList);