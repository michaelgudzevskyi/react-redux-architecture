import { combineReducers } from 'redux';

import counter from './counter';

export const reducers = combineReducers({
  counter,
});


export default reducers