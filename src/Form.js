import React from 'react';

class Form extends React.Component {

    render () {
    return (
        <div>
        <div id="form">
            <h1 className="gradient">New Entry</h1>
            <input 
                type="text" 
                placeholder="Give your entry a title" 
                value={this.props.title} 
                onChange={this.props.changeTitleHandler}
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
                placeholder="Intensity of emotions (scale of 1 to 5)?" 
                value={this.props.emotions} 
                onChange={this.props.changeEmotionsHandler}
            />

            <input id="entryInput"
                type="text" 
                placeholder="How was your day?" 
                value={this.props.entry} 
                onChange={this.props.changeEntryHandler}
            />
            <br></br>
            <button type="submit" onClick={this.props.handleFormClick}>Submit</button>
        </div>

        <div id="pastEntries">
        <ul>
            <h1 className="gradient">Past Entries</h1>
            {this.props.entryArray.map((item, i) => (
            <section>
            <li onClick={this.props.handleLiClick} data-id={i} value={item.id} key={i}>{item.title}</li>
            </section>
          ))}
        </ul>
        </div>
        

        <div id="editForm">
            <h1 className="gradient">Edit Entry</h1>
            <p>Click on an entry title above to edit</p>
            <input 
                type="text" 
                placeholder="Give your entry a title" 
                value={this.props.editTitle} 
                onChange={this.props.changeEditTitleHandler}
            />

            <input 
                type="text" 
                placeholder="How was your day?" 
                value={this.props.editEntry} 
                onChange={this.props.changeEditEntryHandler}
            />

            <input 
                type="text" 
                placeholder="How many hours did you sleep?" 
                value={this.props.editSleep} 
                onChange={this.props.changeEditSleepHandler}
            />

            <input 
                type="text" 
                placeholder="What is your mood?" 
                value={this.props.editMood} 
                onChange={this.props.changeEditMoodHandler}
            />

            <input 
                type="text" 
                placeholder="Intensity of emotions (scale of 1 to 5)?" 
                value={this.props.editEmotions} 
                onChange={this.props.changeEditEmotionsHandler}
            />
            <br></br>
            <button type="submit" onClick={this.props.handleEditEntry}>Submit Edit</button>
        </div>

        <button type="submit" id="formLogOut" onClick={this.props.handleLogOutClick}>Log Out</button>
        </div>
        );
    }
}

export default Form