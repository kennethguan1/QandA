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
            <br />
            <div className="options">
              <h2 className="welcome">Hi, {this.props.currentUser.username}!</h2>
              <img className="profile-image" src={window.dog}/>
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
              <br />
              <br />
              <br />
              <br />
              <Link to="/askquestion" className="link-to-new-question">
                <button className="ask-question-button">
                  <img className="pencil-icon" src={window.pencil}/>
                  Ask Question
                </button>
              </Link>
              <Link to="/">
                <button
                  className="home-button"
                >
                  <img className="home-icon" src={window.home}/>
                  <strong className="home-button-text">Home</strong>
                </button>
              </Link>
                <button
                  className="linkedin-button"
                >
                  <img className="linkedin-icon" src={window.linkedin}/>
                  <a href="https://www.linkedin.com/in/2702235a/" className="linkedin-link">
                    LinkedIn
                  </a>
                </button>
                <button
                  className="github-button"
                >
                  <img className="github-icon" src={window.github}/>
                  <a href="https://github.com/kennethguan1" className="github-link">
                    Github
                  </a>
                </button>
              <br />
              <br />
            </div>
          </hgroup>
        </div>
      </div>
    );

    return this.props.currentUser ? personalGreeting() : guestgreeting();
  }
};

export default Greeting;