import { Component } from "react";
import Note from "./components/Note";
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes,
      newNote: '',
    }
  }

  handleAddNote = async (event) => {
    event.preventDefault();
    await this.setState(
      {
        ...this.state,
        notes: [
          ...this.state.notes,
          {
            id: this.state.notes.length + 1,
            content: this.state.newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
          }
        ]
      }
    )
    await this.setState(
      {
        ...this.state,
        newNote: '' 
      }
    )
  }

  handleOnChangeAddNote = (event) => {
    this.setState(
      {
        ...this.state,
        newNote: event.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {this.state.notes.map(note =>
            <Note
              note={note} 
              key={note.id}
            />
          )}
        </ul>

        <form onSubmit={this.handleAddNote}>
          <input 
            type="text" 
            name="newNote"
            id="newNote"
            placeholder="Type your note here"
            value={this.state.newNote}
            onChange={this.handleOnChangeAddNote}
          />
          <button type="submit">Add note</button>
        </form>
      </div>
    );
  }
}

export default App;