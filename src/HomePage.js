import React from 'react'

class HomePage extends React.Component {
render () {
    return (
        <div>
        <section>
            <h1>Welcome to Patterns!</h1>
            <h2> Patterns Journaling app is a new kind of diary experience that
        assists users in becoming aware of their moods and sleep
        schedules and the affects they have on their mental health.</h2>
        </section>

        <section>
        <div>
            <div>
                <h3>An easier way to manage mental health</h3>
                <h2>See the patterns, identify needs, and communicate more clearly what you need most</h2>
            </div>

        <div className="card">
                <img 
                src={('../src/images/check.png')} 
                alt="Convenience" 
                className="img card--1-img" 
            />

            <div>
                <p>Convenience</p>
                <p>Open the app and easily record thoughts, events, moods, and sleep duration</p>
            </div>
        </div>

        <div className="card">
                <img
                src={('../images/patterns.png')}
                alt="Understand Patterns"
                />

            <div>
                <p>Understand Patterns</p>
                <p>Keep track of how long certain mood and sleep patterns last</p>
            </div>

        </div>

        <div className="card">
                <img
                src={('../images/communication.png')}
                alt="Better Communication"
                />

            <div>
                <p>Better Communication</p>
                <p>If inclined, share these patterns with your mental health professional to help better communicate your needs.</p>
            </div>
        </div>
    </div>
    </section>
    </div>
    );
}
}
export default HomePage