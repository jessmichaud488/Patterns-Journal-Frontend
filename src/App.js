import React from 'react';
import './App.css';
import LogIn from './LogIn';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLogInClick=this.handleLogInClick.bind(this);
  }

  handleLogInClick (e) {
    e.preventDefault();
    console.log('made it to e handler!');
}

  render () {
  return (
    <div className="App">
      <LogIn handleLogInClick={this.handleLogInClick} />
    </div>
  );
  }
}

export default App;
