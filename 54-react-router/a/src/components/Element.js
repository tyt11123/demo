import React from "react";

export const Element = () => (
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