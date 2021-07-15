export const fetchBeans = () => {   console.log("Hello There");   
    return(dispatch) => {
        fetch('http://127.0.0.1:3000/beans', {
            
        
        headers : { 'Content-Type': 'application/json',
              'Accept': 'application/json' }
            }) 
        .then(resp => resp.json())
        .then( beans => dispatch({type: 'FETCH_BEANS', payload: beans})) 
    }
}
