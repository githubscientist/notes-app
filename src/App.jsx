import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map(note => <li key={note.id}>{note.content}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;