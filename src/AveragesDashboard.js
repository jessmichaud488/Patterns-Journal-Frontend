import React from 'react'

class AveragesDashboard extends React.Component {
    render () {
        return (
        <div id="card-main">
            <div id="entry-intro">
            <h1>My Entry Stats</h1>
            <h2>Here you will find your most current averages for your sleep, emotion, and mood patterns based on your entries</h2>
            </div>
            <div className="entry-card">
                <img
                src={require('../src/images/entry.png')}
                alt="Purple lotus"
                />
                <h2>{this.props.contentEntryCount}</h2>
                <h3>Total Entries by Mood</h3>
                <p>Your current total number of entries. Journaling is an extremely therapetuic tool and you should be proud<br></br>
                of what you've recorded so far. Write on!</p>
            </div>

            <div className="entry-card">
                <img 
                src={require('../src/images/sleep.png')}
                alt="Crescent moon"
                />
                <h2>{this.props.avgSleepTime}</h2>
                <h3>Sleep</h3>
                <p>Your average for hours slept according to your entries. Sleep is incredibly important<br></br>to physical and mental
                health and sleeping for a consistent length helps maintain your well-being.</p>
            </div>

            <div className="entry-card">
                <img
                src={require('../src/images/emotion.png')}
                alt="Human side profile"
                />
                <h2>{this.props.avgIntensityLevel}</h2>
                <h3>Emotional Intensity</h3>
                <p>Your current average of daily emotional intensity according to your entries, this number can help you gauge
                how much of an impact daily life events may be effecting your emotional health.</p>
            </div>
        </div>
        )}
    }

export default AveragesDashboard