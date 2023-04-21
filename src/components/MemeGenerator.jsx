import React from "react";
import "./style.css";

function MemeGenerator() {
  const [meme, setMeme] = React.useState({
    top: "",
    bottom: "",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });

  function getnewMeme(e) {
    e.preventDefault();
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        const randomNum = Math.floor(Math.random() * memes.length);
        const randomMemeImg = memes[randomNum].url;
        setMeme({ ...meme, randomImg: randomMemeImg });
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme({ ...meme, [name]: value });
  }

  return (
    <div>
      <header className="header-meme">
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="Problem?"
        />
        <h2>Meme Generator</h2>
        <p>React Course - Project 3</p>
      </header>
      <main className="main-meme">
        <form className="meme-form">
          <div className="row">
            <input
              type="text"
              name="top"
              placeholder="Top Text"
              onChange={handleChange}
            />
            <input
              type="text"
              name="bottom"
              placeholder="Bottom Text"
              onChange={handleChange}
            />
          </div>
          <button onClick={getnewMeme}>Get a new Image</button>
          <div className="meme">
            <img src={meme.randomImg} alt="Meme" className="meme-img" />
            <h2 className="top-text meme-text">
              {meme.top}
            </h2>
            <h2 className="bottom-text meme-text">
              {meme.bottom}
            </h2>
          </div>
        </form>
      </main>
    </div>
  );
}

export default MemeGenerator;
