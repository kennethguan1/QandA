import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../util/session_api_util';

class Greeting extends React.Component {
        constructor(props) {
            super(props);
        };

        render() {

        const sessionLinks = () => (
            <nav className="login-signup">
                <Link to="/">Login or Sign Up</Link>
            </nav>
        );

        const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
            <button className="header-button" onClick={this.props.logoutCurrentUser}>Log Out</button>
        </hgroup>
        );

        return this.props.currentUser ? personalGreeting() : sessionLinks();

        }
    };


export default Greeting;