import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeersList from './components/BeersList';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class App extends Component {

  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data})
      })
      .catch(() => {
        console.log('Fetching failed')
      })
  }

  handleSubmit=(event) => {
    event.preventDefault()
    let name = event.target.name.value
    let description = event.target.description.value
    let tagline = event.target.tagline.value
    let first_brewed = event.target.first_brewed.value
    let brewer_tips = event.target.brewer_tips.value
    let attenuation_level = event.target.attenuation_level.value
    let contributed_by = event.target.contributed_by.value

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
    name: name, description: description, tagline: tagline, first_brewed:first_brewed, brewer_tips:brewer_tips, attenuation_level:attenuation_level, contributed_by:contributed_by})

    .then((response) => {
      this.setState({
        beers: [response.data, ...this.state.beers]
      }, () => {
        this.props.history.push('/beers')
      })
    })
    .catch((err) => {
      console.log('Create failed', err)
    })
  }

  render() {

  return (
    <div className="App">
     <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path ="/beers" component={BeersList}/>
        <Route path="/beers/:beerId" render={(routeProps)=> {
          return <BeerDetails {...routeProps}/>
        }}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" render={(routeProps)=> {
          return <NewBeer onAdd={this.handleSubmit} {...routeProps}/>
        }}/>
        </Switch>
      
    </div>
    );
  }

}

export default withRouter(App)
