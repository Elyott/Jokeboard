import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import JokeBook from './JokeBook.jsx';
import "babel-polyfill";

class App extends Component {
  constructor() {
    super();

    this.state = { response: "" };
  }

  componentDidMount() {

    fetch("http://localhost:5000/api/hello")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ response: data.express });
      });
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch("http://localhost:5000/api/hello");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div>
        <NavBar />
        <JokeBook />
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
