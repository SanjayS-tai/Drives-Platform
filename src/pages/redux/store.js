import {configureStore} from "@reduxjs/toolkit"
import reducers from "./reducers"
import root from "./sagas";
import createSageMiddleware from "redux-saga";


const sagaMiddleware=createSageMiddleware();

export const store=configureStore({
    devTools:true,
    reducer:reducers,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)

})

sagaMiddleware.run(root);