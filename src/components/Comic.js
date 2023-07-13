import {useState} from 'react'

function Comic({image, title, issue, id, handlesRemoveClick}) {
console.assert(title !== null)

const [imageOrDetails, setImageOrDetails]= useState('true')

function handlesImageOrDetailsEvent(){
  setImageOrDetails(!imageOrDetails)
}

  return (
    <div className="comic-item" onClick={()=>handlesImageOrDetailsEvent()}>

{imageOrDetails ? 
      
      <img src={image} alt={title} /> 
      
      :
      
      <div><h3>{title}</h3>
      <h4>{issue}</h4>
      <button onClick={(e)=> handlesRemoveClick(id)}>Remove</button>
      </div>
    }

    </div>
  )

}

export default Comic
