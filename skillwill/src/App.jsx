import { useState } from "react";
import './app.css';
export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div>
      <BookDescription />
    </div>
  );
}

function BookDescription() {
  const [bookData, setBookData] = useState(null);

  function handleGetInfo() {
    const data = {
      name: "The Hobbit",
      description:
        "The adventure of a hobbit, a wizard, and a group of dwarves in Middle-earth.",
      author: "J.R.R. Tolkien",
      image:
        "https://c4.wallpaperflare.com/wallpaper/24/265/239/digital-art-drawing-painting-landscape-wallpaper-preview.jpg"
    };

    setBookData(data);
  }

  return (
    <div>
      {bookData ? (
        <>
          <img
            style={{ maxWidth: 200, width: "100%", height: 100 }}
            src={bookData.image}
            alt="image of book"
          />
          <h1>{bookData.name}</h1>
          <h1>{bookData.author}</h1>
          <h1>{bookData.description}</h1>
        </>
      ) : (
        <button onClick={handleGetInfo}>Get Book Info</button>
      )}
    </div>
  );
}