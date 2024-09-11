import {createSlice} from "@reduxjs/toolkit";

const initialState={
    loading:false,
    data:null,
    loginType:'',
    error:'',
}

const getDetailsSlice=createSlice({
    name:'getDetails',
    initialState,
    reducers:{
        login(state, action) {
            state.loading = true;
            state.error = '';
          },
          loginSuccess(state, action) {
            state.loading = false;
            state.loginType = action.payload;
            console.log(action.payload);
          },
          loginError(state, action) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
          },
    }
})

export const {actions,reducer}=getDetailsSlice;

export default reducer;