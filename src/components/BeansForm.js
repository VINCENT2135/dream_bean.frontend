import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addBeans} from '../actions/beansactions'




 class BeansForm extends Component {

state = {
    name: '',
    origin: ''

}


handleChange = e => {
    const { name , value } = e.target

    this.setState({
        [name]: value 
    })
}
 
handleSubmit = e => {
    e.preventDefault()
    this.props.addBeans(this.state)
}

  
    render() {
        return (
            <form>
                <label> Name: </label>
                <br/>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="name"/>
                <br/>
                <label> Origin: </label>
                <br/>
                <input type="text" value={this.state.description} onChange={this.handleChange} name="origin"/>
                <br/>
                <input type='submit' value="Create Bean"/> 
            </form> 
           
        )
    }
}

export default connect(null, {addBeans})(BeansForm);
