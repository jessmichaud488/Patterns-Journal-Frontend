import React from 'react';
import { withRouter } from 'react-router-dom';

class LogIn extends React.Component {

render () {
    return (
    <div className="login">
    <h1 className="gradient">Weclome back, its great to see you again!</h1>
    <input 
        type="text" 
        placeholder="Your username" 
        value={this.props.username} 
        onChange={this.props.changeUsernameHandler}
    />
    <input
        type="text" 
        placeholder="your password" 
        value={this.props.password} 
        onChange={this.props.changePasswordHandler}
    />

    <button type="submit" onClick={this.props.handleLogInClick}>Submit</button>
    </div>
    );
}
}

export default withRouter(LogIn)