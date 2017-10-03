import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
  user: LoginReducer
})
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
