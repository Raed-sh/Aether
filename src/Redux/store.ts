import { applyMiddleware, createStore, Store } from "redux";
import thunk from 'redux-thunk'
import reducer from "./Reducer";


export const store:Store<PROVIDER_STATE,PROVIDER_ACTION> & {
    dispatch:Dispatch_Provider 
}  = createStore(reducer,applyMiddleware(thunk))