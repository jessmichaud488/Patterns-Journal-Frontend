import React from 'react';
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Form from './Form';
import HomePage from './HomePage';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      entryArray: [],
      //these are for addition form
      editEntryForm: false,
      username: '',
      password: '',
      title: '',
      entry: '',
      sleep: '',
      mood: '',
      emotions: '',
      //these are for edit form
      editTitle: '',
      editEntry: '',
      editSleep: '',
      editMood: '',
      editEmotions: '',
      editEntryid: '',
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
    this.handleLiClick=this.handleLiClick.bind(this);

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);

    this.changeEntryHandler = this.changeEntryHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeSleepHandler = this.changeSleepHandler.bind(this);
    this.changeMoodHandler = this.changeMoodHandler.bind(this);
    this.changeEmotionsHandler = this.changeEmotionsHandler.bind(this);
    this.changeEditEntryHandler = this.changeEditEntryHandler.bind(this);
    this.changeEditDateHandler = this.changeEditDateHandler.bind(this)
    this.changeEditTitleHandler = this.changeEditTitleHandler.bind(this);
    this.changeEditSleepHandler = this.changeEditSleepHandler.bind(this);
    this.changeEditMoodHandler = this.changeEditMoodHandler.bind(this);
    this.changeEditEmotionsHandler = this.changeEditEmotionsHandler.bind(this);
  }

  handleLiClick (e) {
    e.preventDefault();
    console.log(e.currentTarget.dataset.id);
    const item=this.state.entryArray[e.currentTarget.dataset.id]
    this.setState ({
      editEntryForm: true,
      editEntry: item.entry,
      editDate: item.date,
      editTitle: item.title,
      editSleep: item.sleep,
      editMood: item.mood,
      editEntryid: e.currentTarget.dataset.id,
      editEmotions: item.emotions
    })
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
    
    fetch('http://localhost:8080/userRouter/signUp', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, 
                            password: this.state.password}),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(res => {
        return res.json();
      })
  .then(data => {
        fetch('http://localhost:8080/auth/logIn', {
          method: 'POST',
          body: JSON.stringify({username: this.state.username, 
                                password: this.state.password}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((res) => res.json())
          .then(data => {
            console.log(data.authToken)
            localStorage.setItem("auth", data.authToken)
            this.setState ({ isLoggedIn: true }, () => {this.props.history.push('/entries');window.location.reload()})
          })
          .catch(err => {
            console.log("error", err);
        })
      })
    .catch(err => {
    console.log("error", err);
    });
  }

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
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data.authToken)
        localStorage.setItem("auth", data.authToken)
        this.setState ({ isLoggedIn: true }, () => {this.props.history.push('/entries');window.location.reload()})
      })
      .catch(function() {
        console.log("error");
    })
}

  handleLogOutClick (e) {
    console.log('giggles and grins!')
    localStorage.removeItem("auth")
    this.setState ({ isLoggedIn: false }, () => {this.props.history.push('/');window.location.reload()})
  };

  handleFormClick (e) {
    e.preventDefault();
    console.log('made it to form e handler!');
    console.log('state', this.state)
    console.log(JSON.stringify({title: this.state.title, 
      date: this.state.date, 
      entry: this.state.entry, 
      sleep: this.state.sleep,
      mood: this.state.mood,
      emotions: this.state.emotions
    }))
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
    console.log('POST entry', data);
    this.setState ({
      entryArray: this.state.entryArray.concat(data)
    })
  })
  .catch(err =>
    console.log(err)
  )
};

handleEditEntry (e) {
  e.preventDefault();
  console.log(this.state.entryArray)
  const item = this.state.entryArray[this.state.editEntryid]
  fetch(`http://localhost:8080/entryRouter/${item._id}`, {
    method: 'PUT',
    body: JSON.stringify({title: this.state.title, 
                          date: this.state.date, 
                          entry: this.state.entry, 
                          sleep: this.state.sleep,
                          mood: this.state.mood,
                          emotions: this.state.emotions,
                          id: item._id
                        }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
  .then(data => {
    console.log('PUT entry', data);
    const array = this.state.entryArray
    array[this.state.editEntryid] = data
    this.setState ({
       entryArray: array
    })
  })
  .catch(err =>
    console.log(err)
  )
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
  console.log('titleHandler', e.target.value)
  this.setState({ title: e.target.value });
};

changeEditTitleHandler (e) {
  console.log(this.state)
  console.log('titleHandler', e.target.value)
  this.setState({ editTitle: e.target.value });
};

changeEntryHandler (e) {
  this.setState({ entry: e.target.value });
};

changeEditEntryHandler (e) {
  this.setState({ editEntry: e.target.value });
};

changeSleepHandler (e) {
  this.setState({ sleep: e.target.value });
};

changeEditSleepHandler (e) {
  this.setState({ editSleep: e.target.value });
};

changeMoodHandler (e) {
  this.setState({ mood: e.target.value });
};

changeEditMoodHandler (e) {
  this.setState({ editMood: e.target.value });
};

changeEmotionsHandler (e) {
  this.setState({ emotions: e.target.value });
};

changeEditEmotionsHandler (e) {
  this.setState({ editEmotions: e.target.value });
};

changeDateHandler (e) {
  this.setState({ date: e.target.value });
};

changeEditDateHandler (e) {
  this.setState({ editDate: e.target.value });
};

componentDidMount() {
  fetch('http://localhost:8080/entryRouter')
  .then((res) => res.json())
  .then(data => {
      this.setState({entryArray: data})
      })
  .catch(err =>
    console.log(err)
      )
  }

  render () {
  return (
    <Router>
    <div>
      <Route exact path="/" render={() =>
        <HomePage
          showSignUp={this.showSignUp}
          showLogIn={this.showLogIn}
        />}
       />

        <Route exact path="/entries" render={() =>
        <Form
          handleFormClick={this.handleFormClick}
          handleLiClick={this.handleLiClick}
          handleEditEntry={this.handleEditEntry}
          handleDeleteEntry={this.handleDeleteEntry}
          changeTitleHandler={this.changeTitleHandler} 
          changeEntryHandler={this.changeEntryHandler} 
          changeDateHandler={this.changeDateHandler}
          changeSleepHandler={this.changeSleepHandler} 
          changeMoodHandler={this.changeMoodHandler} 
          changeEmotionsHandler={this.changeEmotionsHandler}
          changeEditTitleHandler={this.changeEditTitleHandler} 
          changeEditEntryHandler={this.changeEditEntryHandler} 
          changeEditDateHandler={this.changeEditDateHandler}
          changeEditSleepHandler={this.changeEditSleepHandler} 
          changeEditMoodHandler={this.changeEditMoodHandler} 
          changeEditEmotionsHandler={this.changeEditEmotionsHandler}
          title={this.state.title}
          date={this.state.date}
          entry={this.state.entry}
          sleep={this.state.sleep}
          mood={this.state.mood}
          emotions={this.state.emotions}
          entryArray={this.state.entryArray}
          editEntryForm={this.state.editEntryForm}
          editTitle={this.state.editTitle}
          editDate={this.state.editDate}
          editEntry={this.state.editEntry}
          editSleep={this.state.editSleep}
          editMood={this.state.editMood}
          editEmotions={this.state.editEmotions}
          editEntryid={this.state.editEntryid}
          handleLogOutClick={this.handleLogOutClick}
        />}
        />

      <Route exact path="/logIn" render={() =>
        <LogIn 
          handleLogInClick={this.handleLogInClick}
          changeUsernameHandler={this.changeUsernameHandler} 
          changePasswordHandler={this.changePasswordHandler} 
        />}
      />

      <Route exact path="/signUp" render={() =>
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

export default App
