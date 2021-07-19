import React from 'react'
import { connect } from 'react-redux'
import img1 from '../images/fahd-ahmed1.jpg'
import img2 from '../images/erik-hathaway.jpg'
import img3 from '../images/bernard-hermant.jpg'
import img4 from '../images/mohammed-hassan.jpg'
import img5 from '../images/cris-tagupa.jpg'
import img6 from '../images/alan-graph.jpg'

import './styles.css'








const Heritage = ({beans}) => {
    return (
    <div>

        <h1>Places Of  Origin</h1>
        <img src={img1} className="photo" alt=""/>
    
        <img src={img2} className="photo" alt=""/>
        <img src={img5} className="photo" alt=""/>
        <br/>
        <img src={img3} className="photo" alt=""/>
        <img src={img4} className="photo" alt=""/>
        <img src={img6} className="photo" alt=""/>
        

  
<br/>

<br/> 


        <br/>
       
{beans.map(beans => <ul> <li key={beans.id}>{beans.origin}</li> </ul>)}
    </div>
    );
};

const mapStateToProps = state => {
    return { beans: state.beans}
}

export default connect(mapStateToProps)(Heritage); 
