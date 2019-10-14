import React from 'react';

class LogIn extends React.Component {

render () {
    return (
    <div className="login">
    <h1>Weclome back, its great to see you again!</h1>
    <input 
        type="text" 
        placeholder="Your email" 
        value={this.props.email} 
        onChange={this.props.changeEmailHandler}
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

export default LogIn