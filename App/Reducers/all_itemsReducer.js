
const INITIAL_STATE = { items : []  , loading : true }
export default ( state = INITIAL_STATE , action ) =>
{
    switch( action.type)
    {
        case 'GET_ALL_ITEMS_ATTEMPT':
            return {...state , loading  : true }
        
        case 'GET_ALL_ITEMS_SUCCESS':
                return {...INITIAL_STATE ,  items : action.items , loading  : false }
    
        
        default : 
            return state ;
    }
}