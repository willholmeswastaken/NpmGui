import { put, takeLatest } from 'redux-saga/effects'
import { REQUEST_NPM_MODULE, REQUEST_NPM_MODULE_SUCCESS, REQUEST_NPM_MODULE_FAILURE } from "../actions";
import { getModule, fetchAsync } from '../api'

function* fetchModule( action ) {
   const { moduleName } = action;
   try {
       const result = yield fetchAsync(getModule,[moduleName]);
       if(result.results.length === 0) {
        yield put({type: REQUEST_NPM_MODULE_FAILURE, error: 'No modules found!'});
       } else {
        yield put({type: REQUEST_NPM_MODULE_SUCCESS, module: result.results[0].package });
       }
   } catch (e) {
       yield put({type: REQUEST_NPM_MODULE_FAILURE, error: e.message});
   }
}
export function* moduleSaga() {
   yield takeLatest(REQUEST_NPM_MODULE, fetchModule);
}
export default moduleSaga;