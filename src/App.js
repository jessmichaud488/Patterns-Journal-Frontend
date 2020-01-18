import React from 'react'
import './App.css'
import './Media.css'
import './Stars.css'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Form from './Form'
import HomePage from './HomePage'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AveragesDashboard from './AveragesDashboard'

class App extends React.Component {
  constructor (props) {
    super(props)
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
      error: '',
      //these are for the Averages Dashboard
      entryPct: 0,
      avgSleepTime: 0,
      avgIntensityLevel: 0
    }

    this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleLogInClick = this.handleLogInClick.bind(this)
    this.handleLogOutClick = this.handleLogOutClick.bind(this)
    this.handleFormClick = this.handleFormClick.bind(this)
    this.handleEditEntry = this.handleEditEntry.bind(this)
    this.showSignUp = this.showSignUp.bind(this)
    this.showLogIn = this.showLogIn.bind(this)
    this.handleLiClick = this.handleLiClick.bind(this)

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this)
    this.changePasswordHandler = this.changePasswordHandler.bind(this)

    this.changeEntryHandler = this.changeEntryHandler.bind(this)
    this.changeTitleHandler = this.changeTitleHandler.bind(this)
    this.changeDateHandler = this.changeDateHandler.bind(this)
    this.changeSleepHandler = this.changeSleepHandler.bind(this)
    this.changeMoodHandler = this.changeMoodHandler.bind(this)
    this.changeEmotionsHandler = this.changeEmotionsHandler.bind(this)
    this.changeEditEntryHandler = this.changeEditEntryHandler.bind(this)
    this.changeEditTitleHandler = this.changeEditTitleHandler.bind(this)
    this.changeEditDateHandler = this.changeEditDateHandler.bind(this)
    this.changeEditSleepHandler = this.changeEditSleepHandler.bind(this)
    this.changeEditMoodHandler = this.changeEditMoodHandler.bind(this)
    this.changeEditEmotionsHandler = this.changeEditEmotionsHandler.bind(this)
  }

  handleLiClick (e) {
    e.preventDefault()
    const item = this.state.entryArray[e.currentTarget.dataset.id]
    this.setState ({
      editEntryForm: true,
      editEntry: item.entry,
      editTitle: item.title,
      editSleep: item.sleep,
      editMood: item.mood,
      editEntryid: e.currentTarget.dataset.id,
      editEmotions: item.emotions
    })
};

  showLogIn (e) {
    e.preventDefault()
    this.history.pushState(null, 'logIn')
  };

  showSignUp (e) {
    e.preventDefault()
    this.history.pushState(null, 'signUp')
  };

  handleSignUpClick (e) {
    e.preventDefault();

    fetch(`https://evening-thicket-00015.herokuapp.com/userRouter/signUp`, {
      method: 'POST',
      body: JSON.stringify({ 
      username: this.state.username, password: this.state.password }),
      headers: { "Content-Type": "application/json; charset=utf-8" }

  })
  .then(res => {
        return res.json();
      })
  .then(data => {
        fetch(`https://evening-thicket-00015.herokuapp.com/auth/logIn`, {
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
  };

  handleLogInClick (e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password, this.state.isLoggedIn)

    fetch(`https://evening-thicket-00015.herokuapp.com/auth/logIn`, {
      method: 'POST',
      body: JSON.stringify({username: this.state.username, 
                            password: this.state.password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => {
        localStorage.setItem("auth", data.authToken)
        this.setState ({ isLoggedIn: true }, () => {this.props.history.push('/entries');window.location.reload()})
      })
      .catch(function() {
        console.log("error");
    })
};

  handleLogOutClick (e) {
    localStorage.removeItem("auth")
    this.setState ({ isLoggedIn: false }, () => {this.props.history.push('/');window.location.reload()})
  };

  handleFormClick (e) {
    e.preventDefault();
  fetch(`https://evening-thicket-00015.herokuapp.com/entryRouter`, {
    method: 'POST',
    body: JSON.stringify({title: this.state.title,
                          entry: this.state.entry, 
                          sleep: this.state.sleep,
                          mood: this.state.mood,
                          emotions: this.state.emotions
                        }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem("auth")
    }
  })
  .then((res) => res.json())
  .then(data => {
    this.setState ({
      entryArray: this.state.entryArray.concat(data)
    })
    alert("You have successfully entered an entry!");
  })
  .catch(err =>
    console.log(err)
  )
};

handleEditEntry (e) {
  e.preventDefault();
  const item = this.state.entryArray[this.state.editEntryid]
  fetch(`https://evening-thicket-00015.herokuapp.com/entryRouter/${item._id}`, {
    method: 'PUT',
    body: JSON.stringify({
                          title: this.state.editTitle, 
                          entry: this.state.editEntry, 
                          sleep: this.state.editSleep,
                          mood: this.state.editMood,
                          emotions: this.state.editEmotions,
                          id: item._id
                        }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem("auth")
    }
  })
  .then((res) => res.json())
  .then(data => {
    const array = this.state.entryArray
    array[this.state.editEntryid] = data
    this.setState ({
       entryArray: array
    })
    alert("You have successfully edited your entry!");
  })
  .catch(err =>
    console.log(err)
  )
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

changeEditTitleHandler (e) {
  this.setState({ editTitle: e.target.value });
};

changeDateHandler (e) {
  this.setState({ date: e.target.value });
};

changeEditDateHandler (e) {
  this.setState({ editDate: e.target.value });
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

componentDidMount() {
  fetch(`https://evening-thicket-00015.herokuapp.com/entryRouter`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem("auth")
    }
  })
  .then((res) => res.json())
  .then(data => {
      this.setState({entryArray: data})
      })
  .catch(err =>
    console.log(err)
      )

  let totalSleepTime = 0
  let totalIntensityLevel = 0
  const entries = this.state.entry
    
  totalSleepTime += this.state.entry.hoursSlept
    this.setState(() => {
      return {
        avgSleepTime: (totalSleepTime / this.state.entry.length).toFixed(1)
      }
    })
    
  totalIntensityLevel += this.state.entry.instensityLevel
    this.setState(() => {
      return {
        avgIntensityLevel: (totalIntensityLevel / this.state.entry.length).toFixed(1)
      }
    })
    };

  render () {
  return (
    <Router>
    <div className="main-wrap">
      <div id="stars1"></div>
      <div id="stars1-2"></div> 
      <div id="stars2"></div>
      <div id="stars2-2"></div>
      <div id="stars3"></div>
      <div id="stars3-2"></div>

    <React.StrictMode>
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
          changeTitleHandler={this.changeTitleHandler} 
          changeDateHandler={this.changeDateHandler}
          changeEntryHandler={this.changeEntryHandler} 
          changeSleepHandler={this.changeSleepHandler} 
          changeMoodHandler={this.changeMoodHandler} 
          changeEmotionsHandler={this.changeEmotionsHandler}
          changeEditTitleHandler={this.changeEditTitleHandler} 
          changeEditDateHandler={this.changeEditDateHandler} 
          changeEditEntryHandler={this.changeEditEntryHandler} 
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
          editDate={this.state.date}
          editEntry={this.state.editEntry}
          editSleep={this.state.editSleep}
          editMood={this.state.editMood}
          editEmotions={this.state.editEmotions}
          editEntryid={this.state.editEntryid}
          entryPct={this.state.entryPct}
          avgSleepTime={this.state.avgSleepTime}
          avgIntensityLevel={this.state.avgIntensityLevel}
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
    </React.StrictMode>
    </div>
    </Router>
  )
  }

export default App
