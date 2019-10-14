import React from 'react';
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Form from './Form';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstName: '',
      email: '',
      password: '',
      title: '',
      entry: '',
      sleep: '',
      mood: '',
      emotions: '',
      error: ''
    }
    this.handleSignUpClick=this.handleSignUpClick.bind(this);
    this.handleLogInClick=this.handleLogInClick.bind(this);
    this.handleFormClick=this.handleFormClick.bind(this);

    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);

    this.changeEntryHandler = this.changeEntryHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeSleepHandler = this.changeSleepHandler.bind(this);
    this.changeMoodHandler = this.changeMoodHandler.bind(this);
    this.changeEmotionsHandler = this.changeEmotionsHandler.bind(this);
  }

  handleSignUpClick (e) {
    e.preventDefault();
    console.log('made it to sign up e handler!');
    console.log('e')
};

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to log in e handler!');
    console.log('e')
};

  handleFormClick (e) {
  e.preventDefault();
  console.log('made it to form e handler!');
  console.log('e')
};

changeFirstNameHandler (e) {
  this.setState({ firstName: e.target.value});

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeEmailHandler (e) {
  this.setState({ email: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changePasswordHandler (e) {
  this.setState({ password: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeTitleHandler (e) {
  this.setState({ title: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeEntryHandler (e) {
  this.setState({ entry: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeSleepHandler (e) {
  this.setState({ sleep: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeMoodHandler (e) {
  this.setState({ mood: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeEmotionsHandler (e) {
  this.setState({ emotions: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeDateHandler (e) {
  this.setState({ date: e.target.value });

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

  render () {
  return (
    <div className="App">
      <LogIn 
        handleLogInClick={this.handleLogInClick} 
        changeEmailHandler={this.changeEmailHandler} 
        changePasswordHandler={this.changePasswordHandler} 
      />

      <SignUp 
        handleSignUpClick={this.handleSignUpClick} 
        changeFirstNameHandler={this.changeFirstNameHandler} 
        changeEmailHandler={this.changeEmailHandler} 
        changePasswordHandler={this.changePasswordHandler} 
        />

      <Form 
        handleFormClick={this.handleFormClick} 
        changeTitleHandler={this.changeTitleHandler} 
        changeEntryHandler={this.changeEntryHandler} 
        changeDateHandler={this.changeDateHandler}
        changeSleepHandler={this.changeSleepHandler} 
        changeMoodHandler={this.changeMoodHandler} 
        changeEmotionsHandler={this.changeEmotionsHandler}
        />
    </div>
  );
  }
}

export default App;
