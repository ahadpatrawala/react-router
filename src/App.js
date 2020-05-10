import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import ItemDetails from './ItemDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//To add the ability to handle routing in React -> BrowserRouter
//Route renders component based on the url
//Switch stops rendering all components and renders only a single component... eg. Rendering Home with About


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/> // exact-> only render if the path is /
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id" component={ItemDetails}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home  = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
