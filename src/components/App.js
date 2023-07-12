import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import {useEffect, useState} from 'react'

function App() {
  //create state to be populated with json data and future filters
  const [comics, setComics] = useState([])

  useEffect(()=>(
    fetch('http://localhost:8004/comics/')
    .then(res=>res.json())
    .then(data=>setComics(data))
  ), [])

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics}/>
        </div>

        <div className="sidebar">
          <ComicForm />
        </div>

      </div>


    </div>
  );
}

export default App;
