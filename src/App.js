import React from 'react';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BeersList from './components/BeersList';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Switch >
        <Route exact path="/" component={Home} />
        <Route path ="/beers" component={BeersList}/>
        <Route path="/beers/:beerId" render={(routeProps)=> {
          return <BeerDetails {...routeProps}/>
        }}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={NewBeer}/>
        </Switch>
      
    </div>
  );
}

export default withRouter(App);
