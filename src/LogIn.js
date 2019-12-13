import React from 'react';

class LogIn extends React.Component {

render () {
    return (
    <form>
    <div className="wrapper" ref="wrapper">
    <div className="login">
    <h1>Weclome back, its great to see you again!</h1>
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

    <button type="submit" onClick={this.props.handleLogInClick}>Submit</button>
    </div>
    </div>
    </form>
    );
}
}

export default LogIn