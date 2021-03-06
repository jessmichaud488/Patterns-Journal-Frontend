import React from 'react'

class AveragesDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avgSleepTime: 0,
      avgIntensityLevel: 0
    }
  }

  componentDidMount() {
    var totalSleepTime = 0;
    var totalIntensityLevel = 0;

    for(var i = 0; i < this.state.avgSleepTime.length; i++) {
      totalSleepTime += this.state.hoursSlept[i];
        this.setState(() => {
          return {
            avgSleepTime: (totalSleepTime / this.state.hoursSlept.length)
          }
        })
      }

      for(var i = 0; i < this.state.avgIntensityLevel.length; i++) {
        totalIntensityLevel += this.state.emotions[i];
          this.setState(() => {
            return {
              avgIntensityLevel: (totalIntensityLevel / this.state.emotions.length)
            }
          })
        }
    }

    render () {
        return (
        <div id="card-main">
            <div id="entry-intro">
            </div>
            <div className="entry-card">
                <img
                src={require('../src/images/entry.png')}
                alt="Purple lotus"
                />
                <h2>My Entry Stats</h2>
                <h3>Here you will find your most current averages for your sleep, emotion, and mood patterns<br></br>
                based on your entries</h3>
            </div>

            <div className="entry-card">
                <img 
                src={require('../src/images/sleep.png')}
                alt="Crescent moon"
                />
                <h2>{this.state.avgSleepTime}</h2>
                <h3>Sleep</h3>
                <p>Your average for hours slept according to your entries. Sleep is incredibly important<br></br>to physical and mental
                health and sleeping for a consistent length helps maintain your well-being.</p>
            </div>

            <div className="entry-card">
                <img
                src={require('../src/images/emotion.png')}
                alt="Human side profile"
                />
                <h2>{this.state.avgIntensityLevel}</h2>
                <h3>Emotional Intensity</h3>
                <p>Your current average of daily emotional intensity according to your entries, this number can help you gauge
                how much of an impact daily life events may be effecting your emotional health.</p>
            </div>
        </div>
        )}
    };

export default AveragesDashboard