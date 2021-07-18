import React, { Component } from 'react'
import {connect}  from 'react-redux' 

import { fetchBeans } from '../actions/beansactions'
import Heritage from './Heritage'


 class OriginContainer extends Component {    
    
    componentDidMount()  { 
    this.props.fetchBeans()
}

    render() {
        return (
            <div>
              <Heritage/>
            </div>
        )
    }
}


export default connect(null, {fetchBeans})(OriginContainer);