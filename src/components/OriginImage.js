import React from 'react'
import { connect } from 'react-redux'








const Heritage = ({beans}) => {
    return (
    <div>

        <h1>Places Of Origin</h1>
  
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
