import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Navigation} from './containers/Navigation';
import {NoMatch} from './containers/NoMatch';
import {Home} from './containers/Home';
import {About} from './containers/About';
import {Element} from './components/Element';
import Questioner from './components/Questioner';
import LeaderBoard from './components/LeaderBoard';
import TimerBoard from './components/TimerBoard';


class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <div className="container-fluid">
              <div className="row">
                  <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                      <Navigation/>
                      <div class="main-content-container container-fluid px-4">
                        <Switch>
                          <Route exact path="/" component={Home}  />
                          <Route exact path="/element" component={Element}/>
                          <Route exact path="/questioner"><Questioner question="what is your name" /></Route>
                          <Route exact path="/leaderboard"><LeaderBoard/></Route>
                          <Route exact path="/timer"><TimerBoard/></Route>
                          <Route path="/about" component={About}/>
                          <Route component={NoMatch}/>
                        </Switch>
                      </div>
                  </main>
              </div>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;

