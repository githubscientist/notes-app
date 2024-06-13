import { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <li>{this.props.note.content}</li>
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map(note =>
            <Note
              note={note} 
              key={note.id}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default App;