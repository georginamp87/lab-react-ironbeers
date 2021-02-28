import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

class BeerDetails extends Component {

    state = {
        beer: {}
    }

    componentDidMount(){
        let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=> {
            this.setState({
                beer: response.data
            })
        })
        .catch(()=> {
            console.log('Error while getting beer details')
        })
    }
      
    render() {
        const {beer} = this.state
        console.log(beer)

        return (
            <React.Fragment>
            <Header/>
            <div key={beer._id}>
                <div><img width="70px" src={beer.image_url} alt="beerimage"/></div>
                <div><h5>{beer.name}</h5></div>
                     <p className="text-muted">{beer.tagline}</p>
                     <p>First brewed: {beer.first_brewed}</p> 
                     <p>Attenuation Level: {beer.attenuation_level}</p>
                     <p>Description: {beer.description}</p>
                     <p className="text-muted">Created by: {beer.name}</p>
            </div>   
            </React.Fragment>
              
        )
    }
}

export default BeerDetails