import React from 'react'
import { connect } from 'react-redux'
import img9 from '../images/christina-rumpf.jpg'
import './styles.css';







const BeansList = ({beans}) => {
    return (
    <div>
      <h1>Throw in a Bean!</h1> 

      <img src={img9} className="photo" alt=""/>
<br/>

<br/> 
<h2> Current Beans </h2>

        <br/>
       
{beans.map(beans => <ul> <li key={beans.id}>{beans.name} - {beans.origin}</li> </ul>)}
    </div>
    );
};

const mapStateToProps = state => {
    return { beans: state.beans}
}

export default connect(mapStateToProps)(BeansList); 




