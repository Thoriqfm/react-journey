import profilePic from "./assets/react.svg"

function Card() {
    return (
        <div className="card">
            <img className="card-img" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make YouTube Videos</p>
        </div>
    )
}

export default Card