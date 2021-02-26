import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';


class Home extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '25em' }}>
                    <Card.Img variant="top" src='assets/beers.png' />
                    <Card.Body>
                        <Card.Title><Link to="/beers"><h1>All Beers</h1></Link></Card.Title>
                        <Card.Text>
                        Here is a list of all beers, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25em' }}>
                    <Card.Img variant="top" src='assets/random-beer.png' />
                    <Card.Body>
                        <Card.Title><Link to="/random-beer"><h1>Random Beer</h1></Link></Card.Title>
                        <Card.Text>
                        Select a Random Beer everytime, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25em' }}>
                    <Card.Img variant="top" src='assets/new-beer.png' />
                    <Card.Body>
                        <Card.Title><Link to="/new-beer"><h1>New Beer</h1></Link></Card.Title>
                        <Card.Text>
                        You can create your own Beer anytime, amet consectetur adipisicing elit.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home