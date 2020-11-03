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
      username: "demo_user",
      password: "123456",
      email: "demo@demo.com",
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
            className="username-login"
          />
        </label>
        <br />
        <label>
          <br />
          Password:
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="password-input"
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
            className="username"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="email"
          />
        </label>
        <br />
        <label>
          <br />
          Password:
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="password-input"
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
      <div className="home-page">
        <div className="session-box">
          <div className="website-title">
            <h1>QandA</h1>
          </div>
          <div className="slogan">
            <p>A space to share knowledge and better understand the world</p>
          </div>
          {this.renderErrors()}
          <div className="session-buttons-box">
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
      </div>
    );
  }
}  

export default SessionForm;