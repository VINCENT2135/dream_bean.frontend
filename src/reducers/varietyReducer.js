

export const varietyReducer = (varieties = [], action) => {
    switch(action.type) {
        case 'FETCH_VARIETIES': 
            return action.payload
        default:
            return varieties
    }
}