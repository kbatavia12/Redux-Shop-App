import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import navigatorReducer from './navigatorReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    finderState: navigatorReducer
})

export default rootReducer; 