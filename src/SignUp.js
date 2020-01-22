import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

    render () {
        return (
            <div className="wrapper" ref="wrapper">
            <div className="signup">
                <h1>Weclome, sign up below!</h1>
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
                
                <button type="submit" onClick={this.props.handleSignUpClick} className="signupButton">Submit</button>
            </div>
            <button className="returnButton"><span><Link to="/" className="returnLink">Return</Link></span></button>
            </div>
        );
    }
}

export default SignUp