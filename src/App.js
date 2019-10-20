import React from 'react';
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Form from './Form';
import HomePage from './HomePage';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
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
    this.handleLogOutClick=this.handleLogOutClick.bind(this);
    this.handleFormClick=this.handleFormClick.bind(this);
    this.handleEditEntry=this.handleEditEntry.bind(this);
    this.handleDeleteEntry=this.handleDeleteEntry.bind(this);
    this.showSignUp=this.showSignUp.bind(this);
    this.showLogIn=this.showLogIn.bind(this)

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);

    this.changeEntryHandler = this.changeEntryHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeSleepHandler = this.changeSleepHandler.bind(this);
    this.changeMoodHandler = this.changeMoodHandler.bind(this);
    this.changeEmotionsHandler = this.changeEmotionsHandler.bind(this);
  }


  showLogIn (e) {
    e.preventDefault();
    console.log('showLogIn')
    this.history.pushState(null, 'logIn');
  }

  showSignUp (e) {
    e.preventDefault();
    console.log('showSignUp')
    this.history.pushState(null, 'signUp');
  }

  handleSignUpClick (e) {
    e.preventDefault();
    console.log('made it to sign up e handler!');
    console.log('e')
    
    fetch('http://localhost:8080/auth/signUp', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, 
                            password: this.state.password}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
  })
    .catch(function() {
    console.log("error");
    });
  };

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to log in e handler!');
    console.log('e')
    console.log(this.state.username, this.state.password, this.state.isLoggedIn)

    fetch('http://localhost:8080/auth/logIn', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, 
                            password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
      .then((res) => res.json())
      .then(data => {
        console.log(data.authToken)
        //localStorage.getItem("auth")
        this.setState ({ isLoggedIn: true })
      })
      .catch(function() {
        console.log("error");
    })
  })
};

  handleLogOutClick (e) {
    localStorage.removeItem("auth")
    this.setState ({ isLoggedIn: false })
  };

  handleFormClick (e) {
    e.preventDefault();
    console.log('made it to form e handler!');
    console.log('e')

  fetch('http://localhost:8080/entryRouter', {
    method: 'POST',
    body: JSON.stringify({title: this.state.title, 
                          date: this.state.date, 
                          entry: this.state.entry, 
                          sleep: this.state.sleep,
                          mood: this.state.mood,
                          emotions: this.state.emotions
                        }),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log('POST entry');
    this.setState ({
      title: '',
      entry: '',
      sleep: '',
      mood: '',
      emotions: ''
    })
  })
};

handleEditEntry (e) {
  e.PreventDefault();

  fetch('http://localhost:8080/entryRouter/:id', {
    method: 'PUT',
    body: JSON.stringify({title: this.state.title, 
                          date: this.state.date, 
                          entry: this.state.entry, 
                          sleep: this.state.sleep,
                          mood: this.state.mood,
                          emotions: this.state.emotions
                        }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log('PUT entry');
    this.setState ({
      title: '',
      entry: '',
      sleep: '',
      mood: '',
      emotions: ''
      })
    })
  };
  
  handleDeleteEntry (e) {
    e.PreventDefault();

    fetch('http://localhost:8080/entryRouter/:id', {
      method: 'DELETE',
      body: JSON.stringify({title: this.state.title, 
                            date: this.state.date, 
                            entry: this.state.entry, 
                            sleep: this.state.sleep,
                            mood: this.state.mood,
                            emotions: this.state.emotions
                          }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json().end())
  };

changeUsernameHandler (e) {
  this.setState({ username: e.target.value });

};

changePasswordHandler (e) {
  this.setState({ password: e.target.value });

};

changeTitleHandler (e) {
  this.setState({ title: e.target.value });

};

changeEntryHandler (e) {
  this.setState({ entry: e.target.value });

};

changeSleepHandler (e) {
  this.setState({ sleep: e.target.value });
};

changeMoodHandler (e) {
  this.setState({ mood: e.target.value });
};

changeEmotionsHandler (e) {
  this.setState({ emotions: e.target.value });
};

changeDateHandler (e) {
  this.setState({ date: e.target.value });
};

  render () {
  return (
    <Router>
    <div>
      <Route path="/" render={() =>
        <HomePage
          showSignUp={this.showSignUp}
          showLogIn={this.showLogIn}
        />}
       />

      <Route path="/entries" render={() =>
        <Form
          handleFormClick={this.handleFormClick}
          handleEditEntry={this.handleEditEntry}
          handleDeleteEntry={this.handleDeleteEntry}
          changeTitleHandler={this.changeTitleHandler} 
          changeEntryHandler={this.changeEntryHandler} 
          changeDateHandler={this.changeDateHandler}
          changeSleepHandler={this.changeSleepHandler} 
          changeMoodHandler={this.changeMoodHandler} 
          changeEmotionsHandler={this.changeEmotionsHandler}
        />}
      />

      <Route path="/logIn" render={() =>
        <LogIn 
          handleLogInClick={this.handleLogInClick}
          changeUsernameHandler={this.changeUsernameHandler} 
          changePasswordHandler={this.changePasswordHandler} 
          handleLogOutClick={this.handleLogOutClick}
        />}
      />

      <Route path="/signUp" render={() =>
        <SignUp 
          handleSignUpClick={this.handleSignUpClick}
          changeUsernameHandler={this.changeUsernameHandler} 
          changePasswordHandler={this.changePasswordHandler} 
        />}
      />
    </div>
    </Router>
  );
  }
}

export default App;
