import React from 'react';
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Form from './Form';
import HomePage from './HomePage';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstName: '',
      userName: '',
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
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
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
    
    fetch('http://localhost:8080/auth/signUp', {
      method: 'POST',
      body: JSON.stringify({firstName: this.state.firstName, username: this.state.userName, password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data.authToken)
        localStorage.setItem("auth", data.authToken)
        this.setState ({ isLoggedIn: true })
      })
};

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to log in e handler!');
    console.log('e')
    console.log(this.state.userName, this.state.password)

    fetch('http://localhost:8080/auth/logIn', {
      method: 'POST',
      body: JSON.stringify({username: this.state.userName, password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data.authToken)
        localStorage.setItem("auth", data.authToken)
        this.setState ({ isLoggedIn: true })
      })
};

  handleFormClick (e) {
  e.preventDefault();
  console.log('made it to form e handler!');
  console.log('e')

  fetch('http://localhost:8080/auth/logIn', {
    method: 'POST',
    body: JSON.stringify({username: this.state.userName, password: this.state.password}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(data => {
      console.log(data.authToken)
      localStorage.setItem("auth", data.authToken)
      this.setState ({ isLoggedIn: true })
    })
};

changeFirstNameHandler (e) {
  this.setState({ firstName: e.target.value});

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
};

changeUserNameHandler (e) {
  this.setState({ userName: e.target.value });

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
      <HomePage />
      <LogIn 
        handleLogInClick={this.handleLogInClick} 
        changeUserNameHandler={this.changeUserNameHandler} 
        changePasswordHandler={this.changePasswordHandler} 
      />

      <SignUp 
        handleSignUpClick={this.handleSignUpClick} 
        changeFirstNameHandler={this.changeFirstNameHandler} 
        changeUserNameHandler={this.changeUserNameHandler} 
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
