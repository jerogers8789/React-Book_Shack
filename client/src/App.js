import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from './comps/Nav';
import Search from './pages/search';
import Bookshack from './pages/saved';


const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/bookshack" component={Bookshack}/>
      </Switch>
    </div>
  </Router>
);

export default App;