import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {

render () {
    return (
    <form>
    <div className="login-wrap">
    <div className="login">
    <h1>Weclome back,<br></br>its great to see you again!</h1>
    <input 
        type="text" 
        placeholder="Your username" 
        value={this.props.username} 
        onChange={this.props.changeUsernameHandler}
    />
    <input
        type="password" 
        placeholder="your password" 
        value={this.props.password} 
        onChange={this.props.changePasswordHandler}
    />

    <button type="submit" onClick={this.props.handleLogInClick} className="loginButton">Submit</button>
    </div>
    <button className="returnButton"><span><Link to="/" className="returnLink">Return</Link></span></button>
    </div>
    </form>
    );
}
}

export default LogIn