import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((random) => random.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };
  return (
    <div className='App'>
      <div className='quote'>
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <br />
      <button className='btn' onClick={fetchNewQuote}>
        This is button
      </button>
    </div>
  );
}

export default App;
