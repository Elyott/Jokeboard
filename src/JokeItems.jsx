import React, { Component } from 'react';

import JokeItem from './JokeItem.jsx';

class JokeItems extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="jokeitems">
        <JokeItem />
        <JokeItem />
        <JokeItem />
      </div>;
  }
}

export default JokeItems;