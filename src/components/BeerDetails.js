import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

export default class BeerDetails extends Component {

    state = {
        beer: {}
    }

    getBeer = () => {
        let beerId = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((response)=> {
            let beer = {
            beerId: response.data._id,
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
    }
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}
