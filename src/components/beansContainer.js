import React, { Component } from 'react'
import {connect}  from 'react-redux' 

import { fetchBeans } from '../actions/beansactions'

class BeansContainer extends Component {


    componentDidMount()  { 
        this.props.fetchBeans()
    }



    render() {
        return (
            <div>
                Beans Container 
            </div>
        )
    }
}




export default connect(null, { fetchBeans})(BeansContainer);
