import React, { Component } from 'react'



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
            
            </form> 
           
        )
    }
}

export default BeansForm  
