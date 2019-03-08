import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSetlists } from './actions';
import SetlistItem from './SetlistItem';
import _ from 'lodash';
import SetlistDetail from './SetlistDetail';
import JokeList from './JokeList';

class Setlists extends Component {

  componentDidMount() {
    this.props.fetchSetlists();
  }

  renderSetlistList() {
    return _.map(this.props.setlists, setlist => {
      return (<SetlistItem
        key={setlist.id}
        setlist={setlist}/>)
    })
  }

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
                    {this.renderSetlistList()}
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
                  <SetlistDetail />
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='joke_container'>
                <JokeList />
                {/* <Link to="/newjoke" className="add_joke_btn">New Joke  <i className="	fa fa-plus"></i></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    setlists: state.setlists
  }
}

export default connect(mapStateToProps, { fetchSetlists })(Setlists);