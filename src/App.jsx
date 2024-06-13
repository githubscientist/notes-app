import Note from './components/Note';

function App(props) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
          {
          props.notes.map(note => 
            <Note
              key={note.id}  
              note={note}
            />
          )
          }
      </ul>
    </div>
  )
}

export default App;