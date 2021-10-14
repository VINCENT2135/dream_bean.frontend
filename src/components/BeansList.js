import React from 'react'
import { connect } from 'react-redux'
import img9 from '../images/christina-rumpf.jpg'
import './styles.css';
import img4 from '../images/mohammed-hassan.jpg'
import img2 from '../images/erik-hathaway.jpg'

const BeansList = ({beans}) => {
    return (
    <div>
    <h1>Throw in a Bean!</h1> 
    <img src={img4} className="photo" alt=""/>
    <img src={img9} className="photo" alt=""/>
    <img src={img2} className="photo" alt=""/>
    <br/>
    <br/> <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
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
