import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home/Home.js';

const App = () => (
  <Router>
    <main>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={Home}/>
      <Route path="/blog" component={Home}/>
      <Route path="/projects" component={Home}/>
      <Route path="/contact" component={Home}/>
    </main>
  </Router>
)
export default App;
