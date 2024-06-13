import { Component } from "react";
import Note from "./components/Note";
class App extends Component {

  constructor(props) {
    super(props);
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