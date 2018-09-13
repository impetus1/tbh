import {createStore, applyMiddleware} from '../../../../Users/meistro/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import rootReducer from '../reducers/allReducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}