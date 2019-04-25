import { REQUEST_NPM_MODULE, REQUEST_NPM_MODULE_SUCCESS, REQUEST_NPM_MODULE_FAILURE } from "../actions";

const initialState = {
   module: {},
   loading: false,
   error: ''
};
export default function reduxSagaReducer(state = initialState, action) {
   switch (action.type) {
       case REQUEST_NPM_MODULE: {
           return {
               ...state,
               moduleName: action.moduleName,
               module: {},
               loading: true,
               error:''
           };
       }
       case REQUEST_NPM_MODULE_SUCCESS: {
           return {
               ...state,
               module: action.module,
               loading: false
           }
       }
       case REQUEST_NPM_MODULE_FAILURE: {
           return {
               ...state,
               loading: false,
               error: action.error
           };
       }
       default: {
           return state;
       }
   }
}