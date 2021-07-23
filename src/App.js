import React, { useState } from "react";
import "./styles.css";

const business = [
  { book: "Never Split the Difference", rating: "3.5/5" },
  { book: "Loonshots", rating: "5/5" },
];

const fiction = [
  { book: "Shiva Triology", rating: "5/5" },
  { book: "Harry Potter and the Saucer's Stone", rating: "4.5/5" },
];

const javascript = [
  {
    book: "Eloquent Javascript",
    rating: "4/5",
  },
  {
    book: "You don't know JS",
    rating: "3.5/5",
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
      setList(business);
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
        <button onClick={clickHandler} value="business">
          Business
        </button>
        <hr></hr>
        {list.map((element) => (
          <div className="box">
            <h3>{element.book}</h3>
            <h5>{element.rating}</h5>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default App;
