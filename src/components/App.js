import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "../styles/App.css";

import iconStar from "../images/icon-star.svg";
import illustration from "../images/illustration-thank-you.svg";

function App() {
  const [note, setNote] = useState(0);

  const selectionButton = (option) => {};

  const evaluated = () => {
    toast.success("Evaluation sent!");
  };

  return (
    <div className="container">
      <div>
        <header>
          <div>
            <img src={iconStar} alt="Icon star" id="topImg" />
          </div>
          <h1>How did we do?</h1>
        </header>
        <main className="main-major">
          <div className="text">
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
        </main>
        <footer></footer>
      </div>
      <div className="content">
        <header className="header-feedback">
          <img src={illustration} alt="Smartphone illustration" />
          <p id="result-status">You select {note} out of 5</p>
          <h1>Thank you!</h1>
        </header>
        <main>
          <p>
            You selected out of 5 Thank you! We appreciate you taking the time
            to give a rating. If you ever need more support, don’t hesitate to
            get in touch!
          </p>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
