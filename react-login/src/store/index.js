import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import teamMemberReducer from './Reducers/TeamMember';
import companyReducer from './Reducers/Company';
const reducers = combineReducers({ teamMemberReducer, companyReducer });
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;
