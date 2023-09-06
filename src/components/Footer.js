import React from "react";

export default function Footer() {
    return (
      <footer className="footer">
        <small>
          Coded by{" "}
          <a
            className="footer--link"
            href="https://github.com/MartinChovanec"
            target="_blank"
            rel="noreferrer"
          >
            Martin Chovanec - visit my GitHub!
          </a>
        </small>
      </footer>
    );
  }