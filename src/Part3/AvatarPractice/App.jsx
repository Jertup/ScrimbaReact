import React from "react"
import Star from "./Avatar"
const avatar = new URL("./images/user.png", import.meta.url)
const starFilled = new URL("./images/star-filled.png", import.meta.url)
const starEmpty = new URL("./images/star-empty.png", import.meta.url)

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
                />
                <div className="info">
                    <Star />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
