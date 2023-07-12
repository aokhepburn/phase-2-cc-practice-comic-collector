function ComicForm({image, setsImage, title, setsTitle, issue, setsIssue, description, setsDescription, handleSubmit}) {
  
  //handleSubmit will become POST in APP component this is just for working through all the components\
  //obviously getting rid of the extra props (the variable part of the states) but useful for console.log now
  //left at Wed Jul 12 01:50
  //inputs are changing the states, proven by console.log on line23
  //handleSubmit function is getting the right target value, so that can be passed through to a post object
        //I think that means I can pass through the variable names to the POST object
        //?but can't test it with console.assert or console.log because they are states?
  //Component working and posting.
  //Have to set value for input as the state variable
  
  return (

    <form className="comic-form" onSubmit={(e)=>handleSubmit(e)}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" value={image} onChange={(e)=>setsImage(e.target.value)}/>

      <label htmlFor="title">Title: </label>
      <input name="title" value={title} onChange={(e)=>setsTitle(e.target.value)}/>
      {console.log(title)}

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={issue} onChange={(e)=>setsIssue(e.target.value)}/>

      <label htmlFor="description">Description: </label>
      <input name="description"  value={description} onChange={(e)=>setsDescription(e.target.value)}/>

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
