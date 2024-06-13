import { Component } from "react";
import Note from "./components/Note";
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes
    }
  }

  // component lifecycle
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleAddNote = (event) => {
    console.log(event.target.newNote.value);
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
          />
          <button type="submit">Add note</button>
        </form>
      </div>
    );
  }
}

export default App;