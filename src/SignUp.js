import React from 'react';

class SignUp extends React.Component {

    render () {
        return (
            <div className="signup">
                <h1 className="gradient">Weclome, sign up below!</h1>
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
                
                <button type="submit" onClick={this.props.handleSignUpClick}>Submit</button>
            </div>
        );
    }
}

export default SignUp