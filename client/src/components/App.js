import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home.js';
import Blog from './Blog/Blog.js';
import Folio from './Folio/Folio.js';

const App = () => (
  <Router>
    <main>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/folio" component={Folio}/>
      <Route path="/contact" component={Home}/>
    </main>
  </Router>
)
export default App;
