import React, { Component } from 'react'
import {connect}  from 'react-redux' 
import { fetchBeans } from '../actions/beansactions'
import IncrementButton from '../components/IncrementButton'
import OriginImage from '../components/OriginImage'



 class OriginContainer extends Component {    
    
    componentDidMount()  { 
    this.props.fetchBeans()
}



    render() {
        return (
            <div>
      
           <OriginImage/>
         
         <IncrementButton/>

            </div>
        )
    }
}


export default connect(null, {fetchBeans})(OriginContainer);

