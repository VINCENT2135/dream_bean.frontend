import React, { Component } from 'react'



 class BeansForm extends Component {

state = {
    name: '',
    origin: ''

}




  
    render() {
        return (
            <form>
                <label> Name: </label>
                <br/>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="name"/>
                <br/>
                <label> Origin: </label>
             
              
           
            </form> 
           
        )
    }
}

export default BeansForm  
