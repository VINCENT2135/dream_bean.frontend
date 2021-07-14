export const beansReducer = 
    (state = [], action) => 
{switch(action.type) {
    case 'FETCH_BEANS':
return action.payload
    case 'ADD_BEANS':
return [...state,action.payload]
    default:
return state}

}