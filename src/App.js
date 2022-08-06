import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import Accordion from "./Accordion";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <div className="row ac-wrapper">
        <h2 class="text-center mt-4">About Accordion</h2>
        <div className="col-md-8 mx-auto">
          <div className="accordions-container p-4">
            <div className="head">
              <h3>Several windows stacked on each other</h3>
              <p className="lead">
                The accordion is a graphical control element comprising a
                vertical stacked list of items, such as labels or thumbnails.
              </p>

              <hr />
            </div>
            <div className="accordions">
              {questions.map((item) => {
                return <Accordion key={item.id} question={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
