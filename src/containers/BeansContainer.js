import React, { Component } from 'react'
import {connect}  from 'react-redux' 

import { fetchBeans } from '../actions/beansactions'
import BeansForm from '../components/BeansForm'
import BeansList from '../components/BeansList'

class BeansContainer extends Component {

    componentDidMount()  {
        this.props.fetchBeans()
    }

    render() {
        return (
            <div>
              <BeansList/>
              <br/>
              <BeansForm/>
            </div>
        )
    }
}

export default connect(null, { fetchBeans})(BeansContainer);