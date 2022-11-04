import {combineReducers} from 'redux';

import favoriteReducer from './favorites/reducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
