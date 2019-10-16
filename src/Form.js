import React from 'react';

class Form extends React.Component {
    
    render () {
    return (
        <div className="signup">
            <h1>New Entry</h1>
            <input 
                type="text" 
                placeholder="Give your entry a title" 
                value={this.props.title} 
                onChange={this.props.changeTitleHandler}
            />
            <input 
                type="text" 
                placeholder="today's date (MM/DD/YYYY)" 
                value={this.props.date} 
                onChange={this.props.changeDateHandler}
            />

            <input 
                type="text" 
                placeholder="How was your day?" 
                value={this.props.entry} 
                onChange={this.props.changeEntryHandler}
            />

            <input 
                type="text" 
                placeholder="How many hours did you sleep?" 
                value={this.props.sleep} 
                onChange={this.props.changeSleepHandler}
            />

            <input 
                type="text" 
                placeholder="What is your mood?" 
                value={this.props.mood} 
                onChange={this.props.changeMoodHandler}
            />

            <input 
                type="text" 
                placeholder="How intense are your emotions (scale of 1 to 5)?" 
                value={this.props.emotions} 
                onChange={this.props.changeEmotionsHandler}
            />
            <button type="submit" onClick={this.props.handleDeleteEntry}>Delete</button>
            <button type="submit" onClick={this.props.handleEditEntry}>Edit</button>
            <button type="submit" onClick={this.props.handleFormClick}>Submit</button>
            <button type="submit" oncLick={this.props.handleLogOutClick}>Log Out</button>
        </div>
        );
    }
}

export default Form