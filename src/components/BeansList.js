import React from 'react'
import { connect } from 'react-redux'
import './styles.css';





const BeansList = ({beans}) => {
    return (
    <div>
       
{beans.map(beans => <ul><li key={beans.id}>{beans.name} - {beans.origin}</li></ul>)}
    </div>
    );
};

const mapStateToProps = state => {
    return { beans: state.beans}
}

export default connect(mapStateToProps)(BeansList); 