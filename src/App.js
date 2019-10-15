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
    this.handleFormClick=this.handleFormClick.bind(this);
    this.handleEditEntry=this.handleEditEntry.bind(this);
    this.handleDeleteEntry=this.handleDeleteEntry.bind(this);

    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
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
    
    /*fetch('http://localhost:8080/auth/signUp', {
      method: 'POST',
      body: JSON.stringify({firstName: this.state.firstName, username: this.state.username, password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data.authToken)
        localStorage.setItem("auth", data.authToken)
        this.setState ({ isLoggedIn: true })
      })*/
};

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to log in e handler!');
    console.log('e')
    console.log(this.state.username, this.state.password)

    fetch('http://localhost:8080/auth/logIn', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, password: this.state.password}),
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
      'Content-Type': 'application/json'
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

changeFirstNameHandler (e) {
  this.setState({ firstName: e.target.value});

  /*if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
    this.setState(() => ({ error: "Please fill in all fields" }));
  } else {
    this.setState(() => ({ error: "" }));*/
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
    <div className="App">
      <HomePage />
      <LogIn 
        handleLogInClick={this.handleLogInClick} 
        changeUsernameHandler={this.changeUsernameHandler} 
        changePasswordHandler={this.changePasswordHandler} 
      />

      <SignUp 
        handleSignUpClick={this.handleSignUpClick} 
        changeFirstNameHandler={this.changeFirstNameHandler} 
        changeUsernameHandler={this.changeUsernameHandler} 
        changePasswordHandler={this.changePasswordHandler} 
        />

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
        />
    </div>
  );
  }
}

export default App;
