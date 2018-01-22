import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home.js';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={Home}/>
      <Route path="/blog" component={Home}/>
      <Route path="/projects" component={Home}/>
      <Route path="/contact" component={Home}/>
    </div>
  </Router>
)
export default App;