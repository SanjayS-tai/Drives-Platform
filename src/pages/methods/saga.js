import {put, takeLatest} from "redux-saga/effects"
import { actions } from "./slice";

function* loginSaga(action){
    try{
        const {password}=action.payload;
        let types;
        if(password.includes('user')){
            types='user'
        }
        else if(password.includes('admin')){
            types='admin'
        }
        else{
            throw new Error("Invalid Credentials");
        }
        yield put({type:actions.loginSuccess.type,payload:types})
    }
catch(error){
    yield put({type:actions.loginError.type,payload:error.message});
}
}

const displayGet=[
    takeLatest(actions.login.type,loginSaga),
];

export default displayGet;