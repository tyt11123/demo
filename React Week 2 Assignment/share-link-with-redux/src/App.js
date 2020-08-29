import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import LinkList from './components/LinkList';

function App() {
  return (
    <div className="App">
      <LinkList name="Alex" />
    </div>
  );
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}