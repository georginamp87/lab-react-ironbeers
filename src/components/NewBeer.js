import React, { Component } from 'react'
import Header from './Header'
import {Form, Button} from 'react-bootstrap'

export default class NewBeer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                <form onSubmit={this.props.onAdd}>
                <Form.Group controlId="formBasicEmail">
                    <input type="text" name="name" placeholder="Enter a name"/>
                    <input type="text" name="tagline" placeholder="Enter tagline"/>
                    <input type="text" name="description" placeholder="Enter description"/>
                    <input type="text" name="first_brewed" placeholder="Enter first brewed date"/>
                    <input type="text" name="brewer_tips" placeholder="Enter brewer tips"/>
                    <input type="number" name="attenuation_level" placeholder="Enter attenuation level"/>
                    <input type="text" name="contributed_by" placeholder="Enter name of contributor"/>
                    <button variant="info" type="submit">Create New Beer!</button>
                    </Form.Group>
                </form>
            </div>
            </React.Fragment>
        )
    }
}
