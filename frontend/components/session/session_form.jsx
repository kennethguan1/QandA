import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };

    this.askLogin = true;
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
    this.formType = this.formType.bind(this);
    this.buttonName = this.buttonName.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
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
    this.props.removeSessionErrors();
    this.setState(this.state);
  }

  demo(e) {
    e.preventDefault();
    const demo_user = {
      username: "user1",
      password: "123456",
      email: "user1.com",
    };
    this.props.loginForm(demo_user);
  }

  formType() {
    return this.askLogin ? (
      <form className="login">
        <div className="login-message">Login</div>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="login-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="login-input"
          />
        </label>
        <br />
        <button className="login-button" onClick={this.handleLoginSubmit}>
          Login
        </button>
      </form>
    ) : (
      <form className="signup">
        <div className="signup-message">Signup</div>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="signup-input"
          />
        </label>
        <br />
        <button className="signup-button" onClick={this.handleSignupSubmit}>
          Signup
        </button>
      </form>
    );
  }

  buttonName() {
    if (this.askLogin === true) {
      return "Sign Up";
    } else {
      return "Login";
    }
  }

  renderErrors() {
    let session_errors = Object.values(this.props.session_errors).flat();
    if (session_errors) {
      return (
        <div className="session-error">
          {session_errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="session-container">
        QandA
        {this.renderErrors()}
        <div className="session-box">
          <button className="demo-login" onClick={this.demo}>
            Demo Login
          </button>
          <br />
          <button className="change-login-type" onClick={this.changeFormType}>
            {this.buttonName()}
          </button>
        </div>
        <div className="session-form">{this.formType()}</div>
      </div>
    );
  }
}  

export default SessionForm;