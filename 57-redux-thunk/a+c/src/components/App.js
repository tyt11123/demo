import React from "react";
import logo from "../logo.svg";
import "./App.css";
import store from "../redux/store";
import LinkList from "./LinkList";
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Links</h2>
          <LinkList />
        </div>
      </Provider>
    );
  }
}

export default App;
