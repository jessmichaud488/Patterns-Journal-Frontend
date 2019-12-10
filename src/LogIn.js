import React from 'react';

class LogIn extends React.Component {

componentDidMount() {
    this.refs.wrapper.style.minHeight = window.innerHeight + 'px'
    }

render () {
    return (
    <form>
    <div className="login">
    <h1 className="gradient">Weclome back, its great to see you again!</h1>
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
    </form>
    );
}
}

export default LogIn