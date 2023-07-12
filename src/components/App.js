import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import {useEffect, useState} from 'react'

function App() {
  //create state to be populated with json data and future filters
  const [comics, setComics] = useState([])

  //sets the states for form inputs to create a newComic object
  const [newImage, setsNewImage] = useState('')
  const [newTitle, setsNewTitle] = useState('')
  const [newIssue, setsNewIssue] = useState(0)
  const [newDescription, setsNewDescription] = useState('')

  useEffect(()=>(
    fetch('http://localhost:8004/comics/')
    .then(res=>res.json())
    .then(data=>setComics(data))
  ), [])
  
  //POST either in an event handler or in another function that is called by the event handler
  //do not forget preventDefault or that you do not close the paranthese on the fetch until AFTER the JSON.stringify({newComic})


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics}/>
        </div>

        <div className="sidebar">
          <ComicForm 
          image={newImage}
          setsImage={setsNewImage}
          title={newTitle}
          setsTitle={setsNewTitle}
          issue={newIssue}
          setsIssue={setsNewIssue}
          description={newDescription}
          setsDescription={setsNewDescription}/>
        </div>

      </div>


    </div>
  )
}

export default App;

// newImage url https://images2.fanpop.com/images/photos/2900000/Crisis-dc-comics-2970689-1024-1616.jpg