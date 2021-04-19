import { combineReducers} from 'redux';
import all_itemsReducer from './all_itemsReducer';

export default combineReducers({
   items :  all_itemsReducer 
})