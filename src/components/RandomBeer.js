import React, { Component } from 'react'
import BeerDetails from './BeerDetails'
import Header from './Header'
import axios from 'axios'

export default class RandomBeer extends Component {
    
    state = {
        beer: {}
    }

    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=> {
            this.setState({
                beer: response.data
            })
        })
        .catch(()=> {
            console.log('Error while getting beer details')
        })
    }
      
    getRandomBeer= () => {
        // let randomId = Math.floor(Math.random()*10)
        // axios.get(`https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e${randomId}`)
        // let randomId = Math.floor(Math.random() * this.props.beers.length)
        // let RandomBeer = this.props[randomId]

        // this.setState({
        //     beer: [...this.state.contacts, randomContact]
        // })
    }
    render() {
        const {beer} = this.state
        return (
            <div>
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
           
            </div>
        )
    }
}
