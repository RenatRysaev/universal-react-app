import { combineReducers } from 'redux';

import compilationsReducer from 'store/compilations/reducers';


const rootReducer = combineReducers({
  compilationsReducer,
});

export default rootReducer;
