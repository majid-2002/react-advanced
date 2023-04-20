import React from "react";
import "./style.css";

function MemeGenerator() {
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
            <input type="text" name="topText" placeholder="Top Text" />
            <input type="text" name="bottomText" placeholder="Bottom Text" />
          </div>
          <button>Get a new Image</button>
        </form>
      </main>
    </div>
  );
}

export default MemeGenerator;
