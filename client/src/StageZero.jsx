import React, {Component} from 'react';


class StageZero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
    this.onLogin = this.onLogin.bind(this);
    this.onBegin = this.onBegin.bind(this);
  }

  onBegin(e) {
    e.preventDefault();
    this.props.nextStage()
  }

  onLogin(e) {
    e.preventDefault();
    this.setState({
      loggedIn: true
    });
  }


  render() {
    return (
       (this.state.loggedIn) ? (
          <div className="stage">
            <div className="main_area">
              <div className="ready">Are You Ready To Write Some Jokes?</div>
              <button onClick={this.onBegin} className="process">Begin The Process <span className="glyphicon">&#xe080;</span></button>
            </div>
          </div>
        ) : (
          <div className="stage">
            <div className="main_area">
              <div className="ready">Are You Ready To Write Some Jokes?</div>
                <input className="login_username" placeholder="Username" type="username" />
                <input className="login_username" placeholder="Password" type="password" />
                <button onClick={this.onLogin} className="process login_button">Login</button>
            </div>
          </div>
        )
    );
  }
}
export default StageZero;