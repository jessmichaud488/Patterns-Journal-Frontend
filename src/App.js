import React from 'react';
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstName: '',
      email: '',
      password: ''
    }
    this.handleSignUpClick=this.handleSignUpClick.bind(this);
    this.handleLogInClick=this.handleLogInClick.bind(this);
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  handleSignUpClick (e) {
    e.preventDefault();
    console.log('made it to e handler!');
    console.log('e')
}

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to e handler!');
    console.log('e')
}

changeFirstNameHandler(e) {
  this.setState({ firstName: e.target.value})
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
      <Form />
    </div>
  );
  }
}

export default App;
