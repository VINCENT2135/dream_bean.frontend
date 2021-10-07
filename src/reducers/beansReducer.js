

export const beansReducer = (beans = [], action) => {
    switch(action.type) {
        case 'FETCH_BEANS': 
            return action.payload
        case 'ADD_BEANS': 
            return [...beans, action.payload]
            
        default:
            return beans
    }
}