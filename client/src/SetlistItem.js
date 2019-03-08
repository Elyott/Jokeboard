import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSetlist } from './actions/index';

 class SetlistItem extends Component {
  render() {
    return(
      // <div className='joke' onClick={() => this.props.selectJoke(this.props.joke)}>
      //   <div className='joke_name'>{this.props.setlist.name}</div>
      // </div>
      <div>
      <div className='joke' onClick={() => this.props.selectSetlist(this.props.setlist)}>
        <div className='joke_name'>{this.props.setlist.name}
        </div>
      </div>
      <button className="btn">
        X
      </button>
      </div>
    );
  }
}


export default connect(null, {selectSetlist})(SetlistItem);