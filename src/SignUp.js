import React from 'react'

class SignUp extends React.Component {

    render () {
        return (
            <div className="signup">
                <h1>Weclome back, its great to see you again!</h1>
                <input type="text" placeholder="Your first name" value={this.props.firstName} onChange={this.props.changeFirstNameHandler}></input>
                <input type="text" placeholder="Your email" value={this.props.email} onChange={this.props.changeEmailHandler}></input>
                <input type="text" placeholder="your password" value={this.props.password} onChange={this.props.changePasswordHandler}></input>
                <button type="submit" onClick={this.props.handleSignUpClick}>Submit</button>
            </div>
        );
    }
}

export default SignUp