function Comic({image, title, issue}) {
console.assert(title !== null)

  return (
    <div className="comic-item">

      {/* The image should render if the details aren't displayed */}
      <img src={image} alt={title} />

      {/* The details should render if the image isn't displayed */}
      <h3>{title}</h3>
      <h4>{issue}</h4>
      <button>Remove</button>

    </div>
  )

}

export default Comic
