import React, { Component } from 'react'
import img9 from '../images/arabic-coffee.jpeg'

class Nav extends Component{ 
    render() {
        return(
        <div> <h1> The Mystical Beverage</h1>
        <img src={img9} className="photo2" alt=""/></div>
        )
    }
}

export default Nav 


