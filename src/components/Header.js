import React from "react"
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--img" src={trollFace} alt="troll face" />
      <h1 className="header--title">Meme Generator</h1>
      <h2 className="header--project">One does not simply - make a meme!</h2>
    </header>
  );
}