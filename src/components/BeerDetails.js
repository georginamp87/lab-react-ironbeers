import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

export default class BeerDetails extends Component {

    state = {
        beer: {}
    }

    componentDidMount(){
        let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response)=> {
            let beer = {
            beerId: beerId,
            name: response.data.name,
            image_url: response.data.image_url,
            tagline: response.data.tagline,
            contributed_by: response.data.contributed_by,
            first_brewed: response.data.first_brewed,
            attenuation_level: response.data.attenuation_level,
            description: response.data.description,
            }
            this.setState({
                beer: beer
            })
        })
        .catch(()=> {
            console.log('Error while getting beers')
        })
    }

      
    render() {
        const {beer} = this.state
        return (
            <Header/>
                // <div>
                //     <img width="50px" src={beer.image_url} alt="beerimage"/>
                //     <h5>{beer.name}</h5>
                //     <p className="text-muted">{beer.tagline}</p>
                //     <p>First brewed: {beer.first_brewed}</p> 
                //     <p>Attenuation Level: {beer.attenuation_level}</p>
                //     <p>Description: {beer.description}</p>
                //     <p className="text-muted">Created by: {beer.name}</p>
                // </div>
              
        )
    }
}
