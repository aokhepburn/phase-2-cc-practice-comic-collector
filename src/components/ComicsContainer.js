import Comic from "./Comic"

function ComicsContainer({comics, handlesRemoveClick}) {
    // comics.id
  // comics.title
  // comics.issue
  // comics.image_url

  //image, title, issue

  return (
    <>
    {comics.map((comic)=>
      <Comic
      key={comic.id} 
      id={comic.id}
      image={comic.image_url} 
      title={comic.title}
      issue={comic.issue}
      handlesRemoveClick={handlesRemoveClick}
      />)
}</>
  )

}

export default ComicsContainer
