import React from 'react'

class Form extends React.Component {
    render () {
    return (
        <div className="wrapper" ref="wrapper">
        <div id="form">
            <h1>New Entry</h1>
            <input 
                type="text" 
                placeholder="Give your entry a title" 
                value={this.props.title} 
                onChange={this.props.changeTitleHandler}
                required
            />

            <input 
                type="date" 
                placeholder="Today's date" 
                value={this.props.date} 
                onChange={this.props.changeDateHandler}
                required
            />
        
            <input 
                type="text" 
                placeholder="How many hours did you sleep?" 
                value={this.props.sleep} 
                onChange={this.props.changeSleepHandler}
                required
            />

            <select> 
                value={this.props.mood} 
                onChange={this.props.changeMoodHandler}
                <option value="content">Content</option>
                <option value="undecided">Undecided</option>
                <option value="depressed">Depressed</option>
                required
            </select>

            <input 
                type="text" 
                placeholder="Intensity of emotions (scale of 1 to 5)?" 
                value={this.props.emotions} 
                onChange={this.props.changeEmotionsHandler}
                required
            />

            <textarea 
                type="text"
                placeholder="How was your day?" 
                value={this.props.editEntry} 
                onChange={this.props.changeEntryHandler}
                id="dayParagraph"
            />
            <br></br>
            <button type="submit" onClick={this.props.handleFormClick} className="submitFormButton">Submit</button>
        </div>


        <div id="pastEntries">
        <ul>
            <h1>Past Entries</h1>
            {this.props.entryArray.map((item, i) => (
            <section>
            <li onClick={this.props.handleLiClick} data-id={i} value={item.id} key={i}>{item.title}</li>
            </section>
          ))}
        </ul>
        </div>
        

        <div id="editForm">
            <h1>Edit Entry</h1>
            <p>Click on an entry title above to edit</p>
            <input 
                type="text" 
                placeholder="Give your entry a title" 
                value={this.props.editTitle} 
                onChange={this.props.changeEditTitleHandler}
                required
            />

            <input 
                type="date" 
                placeholder="Today's date" 
                value={this.props.editDate} 
                onChange={this.props.changeEditDateHandler}
                required
            />

            <input 
                type="text" 
                placeholder="How many hours did you sleep?" 
                value={this.props.editSleep} 
                onChange={this.props.changeEditSleepHandler}
                required
            />

            <select> 
                value={this.props.mood} 
                onChange={this.props.changeMoodHandler}
                <option value="content">Content</option>
                <option value="undecided">Undecided</option>
                <option value="depressed">Depressed</option>
                required
            </select>

            <input 
                type="text" 
                placeholder="Intensity of emotions (scale of 1 to 5)?" 
                value={this.props.editEmotions} 
                onChange={this.props.changeEditEmotionsHandler}
                required
            />

            <textarea 
                type="text"
                placeholder="How was your day?" 
                value={this.props.editEntry} 
                onChange={this.props.changeEditEntryHandler}
                id="dayParagraph"
            />
            <br></br>
            <button type="submit" onClick={this.props.handleEditEntry} className="submitEditFormButton">Submit Edit</button>
        </div>

        <button type="submit" id="formLogOut" onClick={this.props.handleLogOutClick} className="logOutButton">Log Out</button>
        </div>
        );
    }
}

export default Form