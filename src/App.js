import React, { useState } from "react";
import "./styles.css";

const philosophy = [
  {
    book: "Tao Te Ching",
    rating: "4.2/5",
    description:
      "The Tao Te Ching is a Chinese classic text traditionally credited to the 6th-century BC sage Laozi. The text's authorship, date of composition and date of compilation are debated.",
  },
  {
    book: "Apology",
    rating: "4.2/5",
    description:
      "The Apology of Socrates, written by Plato, is a Socratic dialogue of the speech of legal self-defence which Socrates spoke at his trial for impiety and corruption in 399 BC.",
  },
  {
    book: "Republic",
    rating: "4.4/5",
    description:
      "The Republic is a Socratic dialogue, authored by Plato around 375 BC, concerning justice, the order and character of the just city-state, and the just man.",
  },
];

const fiction = [
  {
    book: "The Testaments",
    rating: "4.2/5",
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.",
  },
  {
    book: "On Earth We're Briefly Gorgeous",
    rating: "4.7/5",
    description:
      "On Earth We're Briefly Gorgeous is the debut novel by Vietnamese-American poet Ocean Vuong, published by Penguin Press on June 4, 2019",
  },
  {
    book: "Daisy Jones and The Six",
    rating: "4.5/5",
    description:
      "Daisy is a girl coming of age in L.A. in the late sixties, sneaking into clubs on the Sunset Strip, sleeping with rock stars, and dreaming of singing at the Whisky a Go-Go. ",
  },
];

const javascript = [
  {
    book: "Eloquent Javascript",
    rating: "4/5",
    description:
      "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.",
  },
  {
    book: "You don't know JS",
    rating: "3.5/5",
    description:
      "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes. Yet, most developers haven't deeply contemplated how and why these decisions are made and the impacts on code maintainability.The worldwide best selling 'You Don't Know JS' book series is back for a 2nd edition: 'You Don't Know JS Yet'. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.'Scope & Closures' examines all aspects of lexical scope, then builds on these principles to leverage the power of closure, and finally digs into the module pattern for better program structure.",
  },
  {
    book: "Javascript: The Good Parts",
    rating: "4.5/5",
    description:
      "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.",
  },
];

function App() {
  const [list, setList] = useState(javascript);

  function clickHandler(event) {
    // console.log(event.target.value);
    let buttonLabel = event.target.value;
    if (buttonLabel === "javascript") {
      setList(javascript);
    } else if (buttonLabel === "fiction") {
      setList(fiction);
    } else {
      setList(philosophy);
    }
  }

  return (
    <div className="App">
      <h1>📖 Good Books</h1>
      <h4>Checkout my favorite books. Select a genre to get started</h4>
      <nav>
        <button onClick={clickHandler} value="javascript">
          Javascript
        </button>
        <button onClick={clickHandler} value="fiction">
          Fiction
        </button>
        <button onClick={clickHandler} value="philosophy">
          Philosophy
        </button>
        <hr></hr>
        {list.map((element) => (
          <div className="box">
            <h3>{element.book}</h3>
            <h5>{element.rating}</h5>
            <p>{element.description}</p>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default App;
