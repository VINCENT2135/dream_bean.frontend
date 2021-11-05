import React, { Component } from 'react'
import {connect}  from 'react-redux' 
import { fetchBeans } from '../actions/beansactions'
import IncrementButton from '../components/IncrementButton'
import OriginImage from '../components/OriginImage'

import img1 from '../images/fahd-ahmed1.jpg'
import img2 from '../images/erik-hathaway.jpg'
import img3 from '../images/bernard-hermant.jpg'
import img4 from '../images/mohammed-hassan.jpg'
import img5 from '../images/cris-tagupa.jpg'
import img6 from '../images/alan-graph.jpg'

impor



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

