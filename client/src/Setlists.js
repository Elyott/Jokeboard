import React, { Component } from 'react';

class Setlists extends Component {
  render() {
    return (
      <div>
              <div className="main">
        <div className="row">
          <div className='col-3'>
            <div className='joke_container'>
                    <div className='jokeitems item'>
        <div className="title">Setlists</div>
        <div className="joke_list">
          {/* {this.renderJokeList()} */}
        </div>
      </div>
              {/* <Link to="/newjoke" className="add_joke_btn">New Joke  <i className="	fa fa-plus"></i></Link> */}
            </div>
          </div>
          <div className='jokebook_container col-3'>
            <div>
            <div className='title'></div>
              <div className='container'>
                {/* <JokeDetail history={this.props.history}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Setlists;