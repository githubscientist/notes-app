function App(props) {

  // const notesList = [];

  // for (let i = 0; i < props.notes.length; i++){
  //   notesList.push(<li>{ props.notes[i].content }</li>);
  // }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
          {
          props.notes.map(note => <li key={note.id}>{ note.content }</li>)
          }
      </ul>
    </div>
  )
}

export default App;