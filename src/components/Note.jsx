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

export default Note;