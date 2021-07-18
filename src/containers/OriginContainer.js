import React, { Component } from 'react'
import {connect}  from 'react-redux' 

import { fetchBeans } from '../actions/beansactions'
import OriginImage from '../components/OriginImage'



 class OriginContainer extends Component {    
    
    componentDidMount()  { 
    this.props.fetchBeans()
}

    render() {
        return (
            <div>
           <OriginImage/>
            </div>
        )
    }
}


export default connect(null, {fetchBeans})(OriginContainer);


