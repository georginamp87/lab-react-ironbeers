import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends Component {
    render() {
        return (
            <Navbar className="header" bg="primary" variant="dark">
                <Link to='/'><img width="30px" src='/assets/home.png' alt="home-icon"/></Link>
            </Navbar>
        )
    }
}
