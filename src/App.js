import React from 'react';
import './App.css';
import LogIn from './LogIn';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: ''
    }
    this.handleLogInClick=this.handleLogInClick.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to e handler!');
}

changeEmailHandler(e) {
  this.setState({ email: e.target.value })
}

changePasswordHandler(e) {
  this.setState({ password: e.target.value })
}


  render () {
  return (
    <div className="App">
      <LogIn handleLogInClick={this.handleLogInClick} changeEmailHandler={this.changeEmailHandler} changePasswordHandler={this.changePasswordHandler} />
    </div>
  );
  }
}

export default App;
