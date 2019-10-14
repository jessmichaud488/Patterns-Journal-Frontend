import React from 'react';

class SignUp extends React.Component {

    render () {
        return (
            <div className="signup">
                <h1>Weclome, sign up below!</h1>
                <input 
                    type="text" 
                    placeholder="Your first name" 
                    value={this.props.firstName} 
                    onChange={this.props.changeFirstNameHandler}
                />

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
                
                <button type="submit" onClick={this.props.handleSignUpClick}>Submit</button>
            </div>
        );
    }
}

export default SignUp