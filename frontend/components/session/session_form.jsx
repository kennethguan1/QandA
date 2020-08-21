import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.askLogin = true;
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.changeFormType = this.changeFormType.bind(this);
        this.formType = this.formType.bind(this);
        this.buttonName = this.buttonName.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSignupSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupForm(user);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.loginForm(user);
    }
    

    changeFormType(e) {
        e.preventDefault();
        this.askLogin = !this.askLogin;
        this.setState(this.state);
    }

    demo(e) {
        e.preventDefault();
        const demo_user = { username: "user1", password: "123456", email: "user1.com" }
        this.props.loginForm(demo_user);
    }

    formType() {
        return this.askLogin ? (
            <form className="login">
                <div className="login-message">Login</div>
                <label>Username:
                    <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="login-input"
                    />
                </label>
                <br />
                <label>Password:
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                    />
                </label>
                <br />
                <button className="login-button" onClick={this.handleLoginSubmit}>Login</button>
            </form>
        ) : (
            <form className="signup">
                <div className="signup-message">Signup</div>
                <label>Username:
                <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="signup-input"
                />
                </label>
                <br />
                <label>Email:
                <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signup-input"
                />
                </label>
                <br />
                <label>Password:
                <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signup-input"
                />
                </label>
                <br />
                    <button className="signup-button" onClick={this.handleSignupSubmit}>Signup</button>
            </form>
        );
    };

    buttonName() {
        if (this.askLogin === true) {
            return "Sign Up"
        } else {
            return "Login"
        }
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-container">
                QandA
                {this.renderErrors()}
                <div className="session-box">
                    <button className ="demo-login" onClick={this.demo}>
                        Demo Login
                    </button>
                    <br/>
                    <button className="change-login-type" onClick={this.changeFormType}>{this.buttonName()}</button>
                </div>
                <div className="session-form">
                    {this.formType()}
                </div>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div className="login-form-container">
    //             QandA
    //             <form onSubmit={this.handleLoginSubmit} className="login-form-box">
    //                 <br />
    //                 {this.renderErrors()}
    //                 <div className="login-form">
    //                     Login
    //                     <br />
    //                     <label>Username:
    //                         <input type="text"
    //                                 value={this.state.username}
    //                                 onChange={this.update('username')}
    //                                 className="login-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <label>Password:
    //                         <input type="password"
    //                                 value={this.state.password}
    //                                 onChange={this.update('password')}
    //                                 className="login-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <input className="login-submit"
    //                             type="submit"
    //                     />
    //                 </div>
    //             </form>
    //             <br />
    //             <form onSubmit={this.handleSignupSubmit} className="signup-form-box">
    //                 <br />
    //                 {this.renderErrors()}
    //                 <div className="signup-form">
    //                     Sign Up
    //                     <br />
    //                     <label>Username:
    //                         <input type="text"
    //                             value={this.state.username}
    //                             onChange={this.update('username')}
    //                             className="signup-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <label>Email:
    //                         <input type="text"
    //                             value={this.state.email}
    //                             onChange={this.update('email')}
    //                             className="email-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <label>Password:
    //                         <input type="password"
    //                             value={this.state.password}
    //                             onChange={this.update('password')}
    //                             className="signup-input"
    //                         />
    //                     </label>
    //                     <br />
    //                     <input className="signup-submit"
    //                         type="submit"
    //                     />
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
}  

export default SessionForm;