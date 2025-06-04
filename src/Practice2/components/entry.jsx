/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
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
                <a href={props.google}>View on Google Maps.</a>
                <h2 className="entry-title">{props.location}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.info}</p>
            </div>
            
        </article>
    </>
  )
}
export default Entry;