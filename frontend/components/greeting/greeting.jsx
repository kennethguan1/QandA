import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    
    <div className="navbar-website-title">
        <Link to="/" className="website-title-link">
          <h1>
            QandA
          </h1>
        </Link>
    </div>;

    const guestgreeting = () => (
      <nav className="welcome-guest">
        <p>Welcome Guest!</p>
      </nav>
    );

    const personalGreeting = () => (
      <div className="nav-bar">
        <div className="banner">
          <hgroup className="header-group">
            <div className="navbar-website-title">
              <Link to="/" className="website-title-link">
                <h1>QandA</h1>
              </Link>
            </div>
            <h2 className="welcome">Hi, {this.props.currentUser.username}!</h2>
            <Link to="/askquestion" className="link-to-new-question">
              <button className="ask-question-button">Ask Question</button>
            </Link>
            <br />
            <br />
            <Link to="/">
              <button
                className="logout-button"
                onClick={this.props.logoutCurrentUser}
              >
                Log Out
              </button>
            </Link>
          </hgroup>
        </div>
      </div>
    );

    return this.props.currentUser ? personalGreeting() : guestgreeting();
  }
};

export default Greeting;