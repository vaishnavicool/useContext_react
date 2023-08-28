import './App.css';
import About from './components/About';
import NoteState from './contex/notes/noteState';

function App() {
  return (<NoteState>  <About/>
  </NoteState>
    
  );
}

export default App;
