/**
 * Challenge: Fix our component! 😱
 */
function Entry(props) {
    const markerImg = new URL("./images/marker.png", import.meta.url)
  return (
    <>
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={markerImg} 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps.</a>
                <h2 className="entry-title">{props.location}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.info}</p>
            </div>
            
        </article>
    </>
  )
}
export default Entry;