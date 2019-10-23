import React from 'react'
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
render () {
    return (
    <div id="main-div">
        <div id="card-div">
        <section id="intro">
            <h1 className="gradient">Welcome to Patterns!</h1>
            <p> Patterns Journaling app is a new kind of diary experience that
        assists users<br></br> in becoming aware of their moods and sleep
        schedules and<br></br> the affects they have on their mental health.</p>
        </section>

        <div>
            <div id="description">
                <h3 className="gradient">An easier way to manage mental health</h3>
                <p>See the patterns, identify needs, and communicate more clearly what you need most</p>
            </div>

            <div className="card">
                <img 
                src={require('../src/images/check.png')}
                alt="Convenience"
                />
                <h3 className="gradient">Convenience</h3>
                <p>Open the app and easily record thoughts, events, moods, and sleep duration anywhere, anytime.</p>
            </div>

            <div className="card">
                <img
                src={require('../src/images/patterns.png')}
                alt="Understand Patterns"
                />
    
                <h3 className="gradient">Understand Patterns</h3>
                <p>Keep track of how long certain mood and sleep last to better understand your personal patterns.</p>
            </div>

            <div className="card">
                <img
                src={require('../src/images/communication.png')}
                alt="Better Communication"
                />

                <h3 className="gradient">Better Communication</h3>
                <p>If inclined, share these patterns with your mental health professional to help better communicate your needs.</p>
            </div>
            </div>
        </div>
            <div>
                <button><span><Link to="/logIn">Log In</Link></span></button>
                <button><span><Link to="/signUp">Sign Up</Link></span></button>
            </div>
    </div>
    );
}
}
export default HomePage