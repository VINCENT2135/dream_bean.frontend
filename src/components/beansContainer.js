import React, { Component } from 'react'
import {connect}  from 'react-redux' 

import { fetchBeans } from '../actions/beansactions'
import BeansForm from './BeansForm'

class BeansContainer extends Component {

    componentDidMount()  { 
        this.props.fetchBeans()
    }






    render() {
        return (
            <div>
              
            
                <BeansForm/>
            </div>
        )
    }
}









export default connect(null, { fetchBeans})(BeansContainer);


