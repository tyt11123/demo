import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const element = (
  <div>
    <header>
      <h1>Simple Website</h1>
    </header>
    <section>
      This is a simple website made without React. Try to convert this into
      React enabled.
      <ol>
        <li>
          First, you need to use <span class="command">create-react-app</span>
        </li>
        <li>
          Second, you need to run <span class="command">npm start</span>
        </li>
      </ol>
    </section>
    <footer>
      <img src="./logo.png" style={{height:"300px", width:"300px"}} />
    </footer>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
