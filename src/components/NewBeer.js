import React, { Component } from 'react'
import Header from './Header'

export default class NewBeer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
            <form>
                <input type="text" name="name" placeholder="Enter name"/>
                <input type="text" name="tagline" placeholder="Enter tagline"/>
                <input type="text" name="description" placeholder="Enter description"/>
                <input type="text" name="first-brewed" placeholder="Enter first brewed date"/>
                <input type="text" name="brewer-tips" placeholder="Enter brewer tips"/>
                <input type="number" name="attenuation-level" placeholder="Enter attenuation level"/>
                <input type="image" name="contributed-by" placeholder="Enter name of contributor"/>
                
            </form>
            </React.Fragment>
        )
    }
}
