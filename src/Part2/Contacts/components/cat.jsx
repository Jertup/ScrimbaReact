

function Cat(props) {
  return(
    <article className="contact-card">
      <img 
          src={props.img}
          alt="Photo of Mr. Whiskerson"
      />
      <h3>{props.name}</h3>
      <div className="info-group">
          <img 
              src="./images/phone-icon.png" 
              alt="phone icon" 
          />
          <p>{props.phone}</p>
      </div>
      <div className="info-group">
          <img 
              src="./images/mail-icon.png" 
              alt="mail icon"
          />
          <p>{props.email}</p>
      </div>
  </article>
  )
}

const cat1 = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}
export default Cat;