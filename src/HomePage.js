import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

class HomePage extends React.Component {
render () {
    return (
    <div className="homepage-wrap">
    <div id="main-div">
        <section id="intro">
            <h1 className="gradient">Welcome to Patterns!</h1>
            <p> Patterns Journaling app is a new kind of diary experience that
        assists users<br></br> in becoming aware of their moods and sleep
        schedules and<br></br> the affects they have on their mental health.</p>
        <h3 className="gradient">An easier way to manage mental health</h3>
         <p>See the patterns, identify needs, and communicate more clearly what you need most</p>
        </section>

        <div id="card-main">
            <div className="card">
                <img 
                src={require('../src/images/check.png')}
                alt="Convenience"
                />
                <h3>Convenience</h3>
                <p>Open the app and easily record thoughts, events,<br></br>moods, and sleep<br></br>duration anywhere, anytime.</p>
            </div>

            <div className="card">
                <img
                src={require('../src/images/patterns.png')}
                alt="Understand Patterns"
                />
    
                <h3>Understand Patterns</h3>
                <p>Keep track of how long certain moods and sleep cycles<br></br>last to better understand your personal patterns.</p>
            </div>

            <div className="card">
                <img
                src={require('../src/images/communication.png')}
                alt="Better Communication"
                />

                <h3>Better Communication</h3>
                <p>If inclined, share with your mental health<br></br>professional to help better communicate your needs.</p>
            </div>
            </div>
            
            <div>
                <button className="homepageButton"><span><Link to="/logIn" className="homepageLink">Log In</Link></span></button>
                <button className="homepageButton"><span><Link to="/signUp" className="homepageLink">Sign Up</Link></span></button>
            </div>
            <Footer />
    </div>
    </div>
    );
}
}
export default HomePage