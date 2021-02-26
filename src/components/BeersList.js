import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';


export default class BeersList extends Component {

    state = {
        beers : []
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response)=> {
            this.setState({
                beers: response.data
            })
        })
        .catch(()=> {
            console.log('Error while getting beers')
        })
    }
    render() {
        const {beers} = this.state
        return (
            <div>
                <Header/>
                        {
                            beers.map((beer, beerId)=> {
                                return 
                                    <div key={beerId}>
                                        <img width="35px" src={beer.image_url} alt="beerimage"/>
                                        <Link to={`/beers/:${beer._id}`}>{beer.name}</Link>
                                        <p>{beer.tagline}</p>
                                        <p>Created by: {beer.contributed_by}</p>
                                    </div>
                                    })
                        }
            </div>
        )
    }
}


{/* <CardGroup border="primary" style={{ width: '18rem' }}>
                                            <Card>
                                                <Card.Img width="35px" src={beer.image_url} variant="top" alt="beerimage"/>
                                            </Card>
                                            <Card>
                                                <Card.Header key={beerId}><Link to={`/beers/:${beer._id}`}>{beer.name}</Link>
                                                </Card.Header>
                                                <Card.Text>
                                                    <p className="text-muted">{beer.tagline}</p>
                                                    <p>Created by: {beer.contributed_by}</p>
                                                </Card.Text>
                                            </Card>
                                        </CardGroup> */}